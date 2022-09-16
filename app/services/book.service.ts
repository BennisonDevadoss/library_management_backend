import db from '../config/database';
import Category from '../models/category/category.model';
import globalSearchQuery from '../queries/book/book-global-search.query';
import columnSearchQuery from '../queries/book/book-column-search-query';

import { Q_MINIMUM_SIZE } from '../config/constants';
import { getCategoryById } from './category.service';
import { EmptyResultError } from 'sequelize';

import { size, map } from 'lodash';
import { Book, PostReaction } from '../models';
import { paginate, paginatorResult } from '../lib/paginator-result';

import {
  UserInstance,
  BookInstance,
  AddBookParams,
  UpdatePookParams,
  BookListQueryParams
} from '../types';

async function getBookById(id: number) {
  const book = await Book.findByPk(id);
  if (!book) {
    throw new EmptyResultError('Book not found');
  }
  return book;
}

async function create(attrs: AddBookParams, currentUser: UserInstance) {
  const { category_id: categoryId } = attrs;
  const category = await getCategoryById(categoryId);
  const bookCreateAttrs = {
    ...attrs,
    created_by: currentUser.id
  };
  const book = await Book.create(bookCreateAttrs);
  return {
    ...book.toJSON(),
    category_id: category.id,
    category_name: category.name
  };
}

async function filterAndPaginate(query: BookListQueryParams) {
  const page = query.page && query.page >= 1 ? query.page : 1;
  const perPage = query.per_page && query.per_page <= 20 ? query.per_page : 10;
  const limit = perPage;
  const offSet = (page - 1) * perPage;
  const queries =
    query.q && size(query.q) > Q_MINIMUM_SIZE ? globalSearchQuery(query.q) : {};
  const columnQuery = columnSearchQuery(query);
  const books = await Book.findAndCountAll({
    limit: limit,
    offset: offSet,
    where: { ...queries, ...columnQuery },
    include: [
      {
        model: Category,
        as: 'category'
      }
    ]
  });
  const listOfBooks = map(books.rows, (row: BookInstance) => {
    const data = {
      id: row.id,
      name: row.name,
      price: row.price,
      author: row.author,
      rating: row.rating,
      category_id: row.category.id,
      description: row.description,
      category_name: row.category.name
    };
    return data;
  });
  const result = paginatorResult(books.count, page, perPage);
  return paginate(result, listOfBooks, 'books');
}

async function update(
  id: number,
  attrs: UpdatePookParams,
  currentUser: UserInstance
) {
  const { category_id: categoryId } = attrs;
  const book = await getBookById(id);
  const category = await getCategoryById(categoryId);
  const bookUpdateAttrs = {
    name: attrs.name,
    price: attrs.price,
    author: attrs.author,
    category_id: category.id,
    updated_by: currentUser.id,
    description: attrs.description
  };
  const updatedBook = await book.update(bookUpdateAttrs);
  return {
    id: updatedBook.id,
    name: updatedBook.name,
    category_id: category.id,
    price: updatedBook.price,
    rating: updatedBook.rating,
    author: updatedBook.author,
    category_name: category.name,
    description: updatedBook.description
  };
}

async function detail(id: number, currentUser: UserInstance) {
  const book = await getBookById(id);
  const category = await book.getCategory();

  const postReactionCount: object = await db.query(`
  SELECT SUM(CASE WHEN post_reactions.id = 1 THEN 1 ELSE 0 END) AS like,
    SUM(CASE WHEN post_reactions.id = 2 THEN 1 ELSE 0 END) AS love,
    SUM(CASE WHEN post_reactions.id = 3 THEN 1 ELSE 0 END) AS haha,
    SUM(CASE WHEN post_reactions.id = 4 THEN 1 ELSE 0 END) AS wow,
    SUM(CASE WHEN post_reactions.id = 5 THEN 1 ELSE 0 END) AS sad,
    SUM(CASE WHEN post_reactions.id = 6 THEN 1 ELSE 0 END) AS angry,
    SUM(CASE WHEN post_reactions.id = 7 THEN 1 ELSE 0 END) AS dislike
  FROM post_reactions
    WHERE book_id = ${book.id}
  `);
  const postReaction = await PostReaction.findOne({
    where: { book_id: book.id, user_id: currentUser.id }
  });
  const userReaction = postReaction ? await postReaction.getReaction() : null;
  return {
    ...book.toJSON(),
    category_name: category.name,
    user_reaction: userReaction?.name,
    post_reactions: postReactionCount[0][0]
  };
}

async function bookDelete(id: number) {
  const book = await getBookById(id);
  return await book.destroy();
}

export { create, update, detail, getBookById, bookDelete, filterAndPaginate };
