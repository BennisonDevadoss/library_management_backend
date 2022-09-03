import { BookListQueryParams } from '../../types';

import { Op, Sequelize } from 'sequelize';

function columnSearchQuery(query: BookListQueryParams) {
  const {
    name,
    price,
    author,
    rating,
    description,
    category_name: categoryName
  } = query;

  const searchQueries: any[] = [];

  if (description) {
    searchQueries.push({
      description: {
        [Op.iLike]: `%${description}%`
      }
    });
  }
  if (name) {
    searchQueries.push({
      name: { [Op.iLike]: `%${name}%` }
    });
  }
  if (author) {
    searchQueries.push({
      author: { [Op.iLike]: `%${author}%` }
    });
  }
  if (categoryName) {
    searchQueries.push({
      '$category.name$': { [Op.iLike]: `%${categoryName}%` }
    });
  }
  if (price) {
    searchQueries.push(
      Sequelize.where(Sequelize.cast(Sequelize.col('price'), 'varchar'), {
        [Op.iLike]: `%${price}%`
      })
    );
  }
  if (rating) {
    searchQueries.push(
      Sequelize.where(Sequelize.cast(Sequelize.col('rating'), 'varchar'), {
        [Op.iLike]: `%${rating}%`
      })
    );
  }

  return {
    [Op.and]: searchQueries
  };
}

export default columnSearchQuery;
