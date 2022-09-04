import bookListRouterOpts from './books-list.router-option';
import bookCreateRouterOpts from './books-add.router-options';
import bookUpdateRouterOpts from './books-update-router-options';
import bookDetailRouterOpts from './books-detail.router-options';
import bookDeleteRouterOpts from './books-delete.router-options';

import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';

import {
  canAdd,
  canDelete,
  canDetail,
  canUpdate
} from '../../hooks/book-policy.hooks';
import {
  listBooks,
  createBook,
  updateBook,
  detailBook,
  deleteBook
} from '../../controllers/books.controller';

function booksPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    url: '/v1/books',
    method: 'POST',
    schema: bookCreateRouterOpts,
    preHandler: canAdd,
    handler: createBook
  });
  fastify.route({
    url: '/v1/books/:id',
    method: 'PUT',
    schema: bookUpdateRouterOpts,
    preHandler: canUpdate,
    handler: updateBook
  });
  fastify.route({
    url: '/v1/books/:id',
    method: 'GET',
    preHandler: canDetail,
    schema: bookDetailRouterOpts,
    handler: detailBook
  });
  fastify.route({
    method: 'GET',
    url: '/v1/books',
    schema: bookListRouterOpts,
    handler: listBooks
  });
  fastify.route({
    method: 'DELETE',
    url: '/v1/books/:id',
    schema: bookDeleteRouterOpts,
    preHandler: canDelete,
    handler: deleteBook
  });
  next();
}

export default booksPrivateRoutes;
