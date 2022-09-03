import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { CategoryStatic } from '../../types/category';

import { attributes, modelOptions } from './category.model.attributes';

function CategoryModelFactory(sequelize: Sequelize): CategoryStatic {
  return sequelize.define(
    'Category',
    attributes,
    modelOptions
  ) as CategoryStatic;
}

const Category = CategoryModelFactory(db);

export default Category;
