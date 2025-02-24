import { FastifyInstance } from 'fastify';

import UserController from '../controllers/user';
import { LoginRequestDTO, RegisterRequestDTO } from '../dto/user';

export default async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/login', {
    schema: {
      body: LoginRequestDTO,
    },
    handler: UserController.login,
  });

  fastify.post('/register', {
    schema: {
      body: RegisterRequestDTO,
    },
    handler: UserController.register,
  });
}
