import { create, update } from '../services/book.service';
import { FastifyError } from 'fastify';
import { UserInstance } from '../types';
import { AddBookParams, UpdatePookParams } from '../types/books.controller';

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

function updateBook(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  const params = req.body as UpdatePookParams;
  const currentUser: UserInstance = req.currentUser;
  update(id, params, currentUser)
    .then((book) => {
      reply.code(200).send(book);
    })
    .catch((error: Error) => {
      reply.send(error);
    });
}

export { createBook, updateBook };
