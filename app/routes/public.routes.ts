import { FastifyInstance } from 'fastify';
import { sessionPublicRoutes } from './sessions';

import { IncomingMessage, Server, ServerResponse } from 'http';

function publicRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.register(sessionPublicRoutes);
  next(); // middleware concept
}

export default publicRoutes;
