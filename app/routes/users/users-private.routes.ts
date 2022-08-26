import { createUser, listUser } from '../../controllers/users.controller';
import { FastifyInstance } from 'fastify';

import { IncomingMessage, Server, ServerResponse } from 'http';
import userCreateRoutesOpts from './users-add.router-option';
import userListRouterOpts from './users-list.router-option';

function usersPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/users',
    schema: userCreateRoutesOpts,
    handler: createUser
  });
  fastify.route({
    method: 'GET',
    url: '/v1/users',
    schema: userListRouterOpts,
    handler: listUser
  });
  next();
}

export default usersPrivateRoutes;
