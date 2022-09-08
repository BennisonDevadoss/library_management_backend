import { UserInstance } from '../types';
import { FastifyError } from 'fastify';

import { create, postDelete } from '../services/post.service';
import { FastifyReply, FastifyRequest } from 'fastify';

function createPost(req: FastifyRequest, reply: FastifyReply) {
  const { book_id: bookId } = req.params as { book_id: number };
  const currentUser: UserInstance = req.currentUser;
  const file = req.file(); /* The variable file is promise */
  create(bookId, file, currentUser)
    .then(() => {
      reply.code(201).send({ message: 'File uploaded successfully' });
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

function deletePost(req: FastifyRequest, reply: FastifyReply) {
  const { id, book_id: bookId } = req.params as { id: number; book_id: number };
  const currentUser: UserInstance = req.currentUser;
  postDelete(id, bookId, currentUser)
    .then(() => {
      reply.code(200).send({ message: 'Post deleted successfully' });
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { createPost, deletePost };
