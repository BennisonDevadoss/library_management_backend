import userListRouterOpts from './users-list.router-option';
import userCreateRouterOpts from './users-add.router-option';
import userDeleteRouterOpts from './user-delete.router-option';
import userUpdateRouterOpts from './user-update.router-option';
import userDetailRouterOpts from './users-detail.router-option';

import { FastifyInstance } from 'fastify';

import { IncomingMessage, Server, ServerResponse } from 'http';

import {
  canAdd,
  canDelete,
  canDetail,
  canUpdate
} from '../../hooks/user-policy.hook';
import {
  listUser,
  deleteUser,
  createUser,
  detailUser,
  updateUser
} from '../../controllers/users.controller';

function usersPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/users',
    schema: userCreateRouterOpts,
    preHandler: canAdd,
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
    preHandler: canDelete,
    handler: deleteUser
  });
  fastify.route({
    method: 'GET',
    url: '/v1/users/:id',
    schema: userDetailRouterOpts,
    preHandler: canDetail,
    handler: detailUser
  });
  fastify.route({
    method: 'PUT',
    url: '/v1/users/:id',
    preHandler: canUpdate,
    schema: userUpdateRouterOpts,
    handler: updateUser
  });
  next();
}

export default usersPrivateRoutes;
