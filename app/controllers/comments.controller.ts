import { create } from '../services/comment.service';
import { UserInstance } from '../types';
import { AddCommentParams } from '../types/comments.controller';
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

function createComment(req: FastifyRequest, reply: FastifyReply) {
  const { book_id: bookId } = req.params as { book_id: number };
  const currentUser: UserInstance = req.currentUser;
  const params = req.body as AddCommentParams;
  create(bookId, params, currentUser)
    .then((comment) => {
      reply.code(201).send(comment);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { createComment };
