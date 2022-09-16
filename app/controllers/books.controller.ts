import { FastifyError } from 'fastify';
import { UserInstance } from '../types';

import { FastifyReply, FastifyRequest } from 'fastify';

import {
  create,
  update,
  detail,
  bookDelete,
  filterAndPaginate
} from '../services/book.service';

import {
  AddBookParams,
  UpdatePookParams,
  BookListQueryParams
} from '../types/books.controller';

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

function listBooks(req: FastifyRequest, reply: FastifyReply) {
  const query = req.query as BookListQueryParams;
  filterAndPaginate(query)
    .then((books) => {
      reply.code(200).send(books);
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

function detailBook(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  const currentUser: UserInstance = req.currentUser;
  detail(id, currentUser)
    .then((book) => {
      reply.code(200).send(book);
    })
    .catch((error: FastifyError) => [reply.send(error)]);
}

function deleteBook(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  bookDelete(id)
    .then(() => {
      reply.send({ message: 'book deleted successfully' });
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { listBooks, createBook, updateBook, detailBook, deleteBook };
