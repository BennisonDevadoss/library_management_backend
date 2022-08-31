import { create } from '../services/book.service';
import { FastifyError } from 'fastify';
import { UserInstance } from '../types';
import { AddBookParams } from '../types/books.controller';

import { FastifyReply, FastifyRequest } from 'fastify';

function createBook(req: FastifyRequest, reply: FastifyReply) {
  const params = req.body as AddBookParams;
  const currentUser: UserInstance = req.currentUser;
  create(params, currentUser)
    .then((book) => {
      reply.code(201).send(book);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { createBook };
