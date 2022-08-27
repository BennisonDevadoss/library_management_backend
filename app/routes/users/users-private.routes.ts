import userListRouterOpts from './users-list.router-option';
import userCreateRoutesOpts from './users-add.router-option';
import userDeleteRouterOpts from './user-delete.router-option';

import { FastifyInstance } from 'fastify';

import { IncomingMessage, Server, ServerResponse } from 'http';

import {
  listUser,
  deleteUser,
  createUser
} from '../../controllers/users.controller';

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
  fastify.route({
    method: 'DELETE',
    url: '/v1/users/:id',
    schema: userDeleteRouterOpts,
    handler: deleteUser
  });
  next();
}

export default usersPrivateRoutes;
