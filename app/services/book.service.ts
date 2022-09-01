import { EmptyResultError } from 'sequelize';
import { Book } from '../models';
import { UserInstance } from '../types';
import { AddBookParams, UpdatePookParams } from '../types/books.controller';

async function getBookById(id: number) {
  const book = await Book.findByPk(id);
  if (!book) {
    throw new EmptyResultError('Book not found');
  }
  return book;
}
async function create(attrs: AddBookParams, currentUser: UserInstance) {
  const bookCreateAttrs = {
    ...attrs,
    created_by: currentUser.id
  };
  return await Book.create(bookCreateAttrs);
}

async function update(
  id: number,
  attrs: UpdatePookParams,
  currentUser: UserInstance
) {
  const book = await getBookById(id);
  const bookUpdateAttrs = {
    ...attrs,
    updated_by: currentUser.id
  };
  return book.update(bookUpdateAttrs);
}

export { create, update };
