import globalSearchQuery from '../queries/book/book-global-search.query';
import columnSearchQuery from '../queries/book/book-column-search-query';

import { Book } from '../models';
import { UserInstance } from '../types';
import { BookInstance } from 'app/types/book';
import { Q_MINIMUM_SIZE } from '../config/constants';
import { EmptyResultError } from 'sequelize';

import { size, map } from 'lodash';
import { paginate, paginatorResult } from '../lib/paginator-result';

import {
  AddBookParams,
  UpdatePookParams,
  BookListQueryParams
} from '../types/books.controller';

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

async function filterAndPaginate(query: BookListQueryParams) {
  const page = query.page ? query.page : 1;
  const perPage = query.per_page && query.per_page <= 10 ? query.per_page : 10;
  const limit = perPage;
  const offSet = (page - 1) * perPage;
  const queries =
    query.q && size(query.q) > Q_MINIMUM_SIZE ? globalSearchQuery(query.q) : {};
  const columnQuery = columnSearchQuery(query);
  const books = await Book.findAndCountAll({
    limit: limit,
    offset: offSet,
    where: { ...queries, ...columnQuery }
  });
  const listOfBooks = map(books.rows, (row: BookInstance) => {
    const data = {
      id: row.id,
      name: row.name,
      price: row.price,
      author: row.author,
      rating: row.rating,
      description: row.description
    };
    return data;
  });
  const result = paginatorResult(listOfBooks.count, page, perPage);
  return paginate(result, listOfBooks, 'books');
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

async function detail(id: number) {
  const user = await getBookById(id);
  return user;
}

export { create, update, detail, filterAndPaginate };
