import { listCategories } from '../../controllers/categories.controller';
import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';

function categoriesPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: any) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/categories',
    handler: listCategories
  });
  next();
}

export default categoriesPrivateRoutes;
