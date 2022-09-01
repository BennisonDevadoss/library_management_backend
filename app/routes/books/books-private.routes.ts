import bookCreateRoutesOpts from './books-add.router-options';

import { canAdd } from '../../hooks/book-policy.hooks';
import { createBook } from '../../controllers/books.controller';
import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';
function booksPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    url: '/v1/books',
    method: 'POST',
    schema: bookCreateRoutesOpts,
    preHandler: canAdd,
    handler: createBook
  });
  next();
}

export default booksPrivateRoutes;
