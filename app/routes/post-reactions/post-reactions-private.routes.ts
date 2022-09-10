import postReactionCreateRouterOpts from './post-reactions.add.router-options';

import { FastifyInstance } from 'fastify';
import { createPostReaction } from
'../../controllers/post-reactions.controller';

import { Server, IncomingMessage, ServerResponse } from 'http';

function postReactionsPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/books/:book_id/post_reactions',
    schema: postReactionCreateRouterOpts,
    handler: createPostReaction
  });
  next();
}

export default postReactionsPrivateRoutes;
