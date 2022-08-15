import { logout } from '../../controllers/sessions.controller';
import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';

function sessionPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'PUT',
    url: '/v1/logout',
    handler: logout
  });
  next();
}

export default sessionPrivateRoutes;
