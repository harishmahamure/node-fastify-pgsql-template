import Fastify from 'fastify';

import logger from './config/logger';
import securityConfig from './config/security';

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

securityConfig(app);

export default app;
