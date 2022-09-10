import { create } from '../services/post-reaction.service';
import { UserInstance } from '../types';
import { PostReactionInstance } from '../types/post-reaction';
import { AddPostReactionParams } from '../types/post-reactions.controller';

import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

function createPostReaction(req: FastifyRequest, reply: FastifyReply) {
  const { book_id: bookId } = req.params as { book_id: number };
  const currentUser: UserInstance = req.currentUser;
  const params = req.body as AddPostReactionParams;
  create(bookId, params, currentUser)
    .then((postReaction: PostReactionInstance) => {
      reply.code(201).send(postReaction);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { createPostReaction };
