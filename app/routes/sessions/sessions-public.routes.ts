import loginRouterOpts from './sessions-login.router-option';

import { login } from '../../controllers/sessions.controller';
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

function sessionPublicRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/login',
    schema: loginRouterOpts,
    handler: login
  });
  next();
}

export default sessionPublicRoutes;
