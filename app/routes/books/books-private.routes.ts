import bookListRouterOpts from './books-list.router-option';
import bookCreateRouterOpts from './books-add.router-options';
import bookUpdateRouterOpts from './books-update-router-options';
import bookDetailRouterOpts from './books-detail.router-options';

import { FastifyInstance } from 'fastify';

import { canAdd, canDetail, canUpdate } from '../../hooks/book-policy.hooks';
import { Server, IncomingMessage, ServerResponse } from 'http';

import {
  listBooks,
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
  next();
}

export default booksPrivateRoutes;
