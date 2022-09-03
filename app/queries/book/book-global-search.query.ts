import { Op, Sequelize } from 'sequelize';

function globalSearchQuery(text: string) {
  const searchQueries: any[] = [];
  searchQueries.push({
    name: { [Op.iLike]: `%${text}%` }
  });
  searchQueries.push({
    author: { [Op.iLike]: `%${text}%` }
  });
  searchQueries.push({
    description: { [Op.iLike]: `%${text}%` }
  });
  searchQueries.push(
    Sequelize.where(Sequelize.cast(Sequelize.col('rating'), 'varchar'), {
      [Op.iLike]: `%${text}%`
    })
  );
  searchQueries.push(
    Sequelize.where(Sequelize.cast(Sequelize.col('price'), 'varchar'), {
      [Op.iLike]: `%${text}%`
    })
  );
  return {
    [Op.or]: searchQueries
  };
}

export default globalSearchQuery;
