import { UserInstance } from '../types';
import { FastifyError } from 'fastify';

import { create, imageDelete } from '../services/image.service';
import { FastifyReply, FastifyRequest } from 'fastify';

function createImage(req: FastifyRequest, reply: FastifyReply) {
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

function deleteImage(req: FastifyRequest, reply: FastifyReply) {
  const { id, book_id: bookId } = req.params as { id: number; book_id: number };
  const currentUser: UserInstance = req.currentUser;
  imageDelete(id, bookId, currentUser)
    .then(() => {
      reply.code(200).send({ message: 'Image deleted successfully' });
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { createImage, deleteImage };
