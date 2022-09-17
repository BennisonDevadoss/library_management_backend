import { Op } from 'sequelize';
import { CategoryListQueryParms } from '../../types';

function columnSearchQuery(query: CategoryListQueryParms) {
  const { name } = query;
  const searchQuries: any[] = [];
  if (name) {
    searchQuries.push({
      name: { [Op.iLike]: `%${name}%` }
    });
  }
  return {
    [Op.and]: searchQuries
  };
}

export default columnSearchQuery;
