import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { BookStatic } from '../../types/book';

import { attributes, modelOptions } from './book.model.attributes';

function BookModelAttributes(sequelize: Sequelize): BookStatic {
  return sequelize.define('books', attributes, modelOptions) as BookStatic;
}

const Book = BookModelAttributes(db);

export default Book;
