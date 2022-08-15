import addUserAuthHook from '../hooks/user.authentication.hook';

import { FastifyInstance } from 'fastify';
import { usersPrivateRoutes } from './users';
import { IncomingMessage, Server, ServerResponse } from 'http';

function privateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  addUserAuthHook(fastify);
  fastify.register(usersPrivateRoutes);
  next();
}

export default privateRoutes;
