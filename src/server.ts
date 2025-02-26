import app from './app';
import './config/db';
import './config/env';
import logger from './config/logger';
import { TestDto } from './dto/test';
import { ResponseUtil } from './utils/response';

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  return ResponseUtil.success<TestDto>(res, 'Hello World', {
    name: 'harish',
  });
});

process.on('unhandledRejection', (reason) => {
  logger.error(reason, 'Unhandled Rejection at Promise');
});

process.on('uncaughtException', (error) => {
  logger.error(error, 'Uncaught Exception');
});

app.listen({ port: Number(PORT) }, (err) => {
  if (err) {
    logger.error(err, 'Server Error');
    process.exit(1);
  }
  logger.info(`Server running on http://localhost:${PORT}`);
});
