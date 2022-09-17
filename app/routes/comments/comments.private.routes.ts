import commentCreateRouterOpts from './comments-add.router-option';

import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';
import { createComment } from '../../controllers/comments.controller';

function commentsPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/books/:book_id/comments',
    schema: commentCreateRouterOpts,
    handler: createComment
  });
  next();
}

export default commentsPrivateRoutes;
