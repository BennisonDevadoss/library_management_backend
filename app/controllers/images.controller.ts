import { create } from '../services/image.service';
import { UserInstance } from '../types';
import { FastifyError } from 'fastify';

import { FastifyReply, FastifyRequest } from 'fastify';

function createImage(req: FastifyRequest, reply: FastifyReply) {
  const { id: bookId } = req.params as { id: number };
  const currentUser: UserInstance = req.currentUser;
  const file = req.file(); /* The variable file is promise */
  create(bookId, file, currentUser)
    .then(() => {
      reply.send({ message: 'File uploaded successfully' });
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { createImage };
