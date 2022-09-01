import bookCreateRoutesOpts from './books-add.router-options';
import bookUpdateRoutesOpts from './books-update-router-options';
import bookDetailRoutesOpts from './books-detail.router-options';

import { FastifyInstance } from 'fastify';

import { canAdd, canDetail, canUpdate } from '../../hooks/book-policy.hooks';
import { Server, IncomingMessage, ServerResponse } from 'http';

import {
  createBook,
  updateBook,
  detailBook
} from '../../controllers/books.controller';

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
  fastify.route({
    url: '/v1/books/:id',
    method: 'GET',
    preHandler: canDetail,
    schema: bookDetailRoutesOpts,
    handler: detailBook
  });
  next();
}

export default booksPrivateRoutes;
