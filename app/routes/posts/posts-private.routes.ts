import postCreateRouterOpts from './posts-add.router-options';
import postDeleteRouterOpts from './posts-delete.router-options';

import { FastifyInstance } from 'fastify';

import { createPost, deletePost } from '../../controllers/posts.controller';

import { Server, IncomingMessage, ServerResponse } from 'http';

function postsPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/books/:book_id/posts',
    schema: postCreateRouterOpts,
    handler: createPost
  });
  fastify.route({
    method: 'DELETE',
    url: '/v1/books/:book_id/posts/:id',
    schema: postDeleteRouterOpts,
    handler: deletePost
  });
  next();
}

export default postsPrivateRoutes;
