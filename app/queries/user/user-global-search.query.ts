import { Op } from 'sequelize';

function globalSearchQuery(q: string | undefined) {
  const text = q;
  const searchQueries: any[] = [];

  searchQueries.push({
    name: { [Op.iLike]: `%${text}%` }
  });
  searchQueries.push({
    email: { [Op.iLike]: `%${text}%` }
  });
  searchQueries.push({
    mobile_no: { [Op.iLike]: `%${text}%` }
  });
  searchQueries.push({
    '$roles.role$': { [Op.iLike]: `%${text}%` }
  });
  return {
    [Op.or]: searchQueries
  };
}

export default globalSearchQuery;
