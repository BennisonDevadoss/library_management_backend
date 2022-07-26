import addUserAuthHook from '../hooks/user-authentication.hook';

import { FastifyInstance } from 'fastify';
import { usersPrivateRoutes } from './users';
import { booksPrivateRoutes } from './books';
import { postsPrivateRoutes } from './posts';
import { sessionPrivateRoutes } from './sessions';
import { commentsPrivateRoutes } from './comments';
import { categoriesPrivateRoutes } from './categories';
import { postReactionsPrivateRoutes } from './post-reactions';
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
  fastify.register(commentsPrivateRoutes);
  fastify.register(categoriesPrivateRoutes);
  fastify.register(postReactionsPrivateRoutes);
  next();
}

export default privateRoutes;
