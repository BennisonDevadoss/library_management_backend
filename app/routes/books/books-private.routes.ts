import bookCreateRoutesOpts from './books-add.router-options';
import bookUpdateRoutesOpts from './books-update-router-options';

import { FastifyInstance } from 'fastify';

import { canAdd, canUpdate } from '../../hooks/book-policy.hooks';
import { createBook, updateBook } from '../../controllers/books.controller';

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
  fastify.route({
    url: '/v1/books/:id',
    method: 'PUT',
    schema: bookUpdateRoutesOpts,
    preHandler: canUpdate,
    handler: updateBook
  });
  next();
}

export default booksPrivateRoutes;
