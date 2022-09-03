import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { BookStatic } from '../../types/book';

import { attributes, modelOptions } from './book.model.attributes';

function BookModelFactory(sequelize: Sequelize): BookStatic {
  return sequelize.define('Book', attributes, modelOptions) as BookStatic;
}

const Book = BookModelFactory(db);

export default Book;
