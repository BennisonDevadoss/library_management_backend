import addUserAuthHook from '../hooks/user-authentication.hook';

import { FastifyInstance } from 'fastify';
import { usersPrivateRoutes } from './users';
import { booksPrivateRoutes } from './books';
import { postsPrivateRoutes } from './posts';
import { sessionPrivateRoutes } from './sessions';

import { IncomingMessage, Server, ServerResponse } from 'http';

function privateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  addUserAuthHook(fastify);
  fastify.register(usersPrivateRoutes);
  fastify.register(booksPrivateRoutes);
  fastify.register(postsPrivateRoutes);
  fastify.register(sessionPrivateRoutes);
  next();
}

export default privateRoutes;
