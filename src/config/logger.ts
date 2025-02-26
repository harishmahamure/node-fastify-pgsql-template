import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  redact: {
    paths: ['req.headers.authorization', 'req.body.password'],
    censor: '********',
  },
  base: null,
  formatters: {
    log: (object) => ({
      timestamp: new Date().toISOString(),
      service: process.env.SERVICE_NAME || 'fastify-app',
      ...object,
    }),
  },
  transport:
    process.env.NODE_ENV === 'development'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname',
          },
        }
      : undefined,
});

export default logger;
