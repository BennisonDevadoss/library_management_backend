import { Book } from '../models';
import { UserInstance } from '../types';
import { AddBookParams } from '../types/books.controller';

async function create(attrs: AddBookParams, currentUser: UserInstance) {
  const bookCreateAttrs = {
    ...attrs,
    created_by: currentUser.id
  };
  return await Book.create(bookCreateAttrs);
}

export { create };
