import categoryListRouterOpts from './categories-list.router-options';

import { listCategories } from '../../controllers/categories.controller';
import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';

function categoriesPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: any) => void
) {
  fastify.route({
    method: 'GET',
    url: '/v1/categories',
    schema: categoryListRouterOpts,
    handler: listCategories
  });
  next();
}

export default categoriesPrivateRoutes;
