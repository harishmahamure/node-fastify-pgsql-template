import Fastify from 'fastify';

import logger from './config/logger';
import securityConfig from './config/security';
import { ApiError } from './utils/custom-error';
import { ResponseUtil } from './utils/response';

const app = Fastify({ logger: false });

app.addHook('onRequest', (req, res, done) => {
  (res as any).startTime = Date.now();
  logger.info(
    { headers: req.headers, body: req.body, query: req.query, params: req.params, url: req.url },
    'Incoming Request'
  );
  done();
});

app.addHook('onResponse', (_req, res, done) => {
  const responseTime = Date.now() - (res as any).startTime;
  logger.info(
    { statusCode: res.statusCode, headers: res.headers },
    `Outgoing Response ${responseTime}ms`
  );
  done();
});

app.setErrorHandler(async (error, _req, res) => {
  if (error instanceof ApiError) {
    logger.error(error, 'API Error');
    return ResponseUtil.error(res, error.message, error.statusCode);
  } else {
    logger.error(error, 'Internal Server Error');
    return ResponseUtil.error(res, 'Internal Server Error', 500);
  }
});
securityConfig(app);

export default app;
