import publicRoutes from './public.routes';
import privateRoutes from './private.routes';

import { renderError } from './render.error';
import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';

function routes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.setErrorHandler((error, request, reply) => {
    renderError(reply, error);
  });
  fastify.register(publicRoutes);
  fastify.register(privateRoutes);
  next();
}

export default routes;
