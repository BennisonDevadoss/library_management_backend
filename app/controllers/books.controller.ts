import { FastifyError } from 'fastify';
import { UserInstance } from '../types';
import { BookInstance } from 'app/types/book';

import { FastifyReply, FastifyRequest } from 'fastify';
import { AddBookParams, UpdatePookParams } from '../types/books.controller';

import { create, update, detail } from '../services/book.service';

function createBook(req: FastifyRequest, reply: FastifyReply) {
  const params = req.body as AddBookParams;
  const currentUser: UserInstance = req.currentUser;
  create(params, currentUser)
    .then((book: BookInstance) => {
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
    .then((book: BookInstance) => {
      reply.code(200).send(book);
    })
    .catch((error: Error) => {
      reply.send(error);
    });
}

function detailBook(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  detail(id)
    .then((book: BookInstance) => {
      reply.code(200).send(book);
    })
    .catch((error: FastifyError) => [reply.send(error)]);
}

export { createBook, updateBook, detailBook };
