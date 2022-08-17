import { createUser } from '../../controllers/users.controller';
import { FastifyInstance } from 'fastify';

import { IncomingMessage, Server, ServerResponse } from 'http';

function usersPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/users',
    handler: createUser
  });
  next();
}

export default usersPrivateRoutes;
