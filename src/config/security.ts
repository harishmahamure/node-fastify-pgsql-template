import cors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import { FastifyInstance } from 'fastify';

export default async function securityConfig(app: FastifyInstance) {
  await app.register(fastifyHelmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  });

  await app.register(cors, {
    origin: [process.env.CORS_ORIGIN || '*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
}
