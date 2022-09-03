import { BookListQueryParams } from '../../types/books.controller';
import { Op, Sequelize } from 'sequelize';

function columnSearchQuery(query: BookListQueryParams) {
  const { name, author, price, rating, description } = query;
  const searchQueries: any[] = [];
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
  if (description) {
    searchQueries.push({
      description: {
        [Op.iLike]: `%${description}%`
      }
    });
  }

  return {
    [Op.and]: searchQueries
  };
}

export default columnSearchQuery;
