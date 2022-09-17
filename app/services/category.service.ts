import columnSearchQuery from
'../queries/category/category-column-search-query';

import { map } from 'lodash';
import { Category } from '../models';
import { EmptyResultError } from 'sequelize';
import { CategoryListQueryParms } from '../types';
import { paginate, paginatorResult } from '../lib/paginator-result';

async function getCategoryById(id: number) {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new EmptyResultError('category not found');
  }
  return category;
}

async function filterAndPaginate(query: CategoryListQueryParms) {
  const page = query.page && query.page > 0 ? query.page : 1;
  const perPage = query.per_page && query.per_page > 0 ? query.per_page : 6;
  const offSet = (page - 1) * perPage;
  const limit = perPage;
  const columnQuery = await columnSearchQuery(query);

  const categories = await Category.findAndCountAll({
    limit: limit,
    offset: offSet,
    where: { ...columnQuery },
    attributes: ['id', 'name']
  });
  const listOfCategories = map(
    categories.rows,
    (row: { id: number; name: string }) => {
      const data = {
        id: row.id,
        name: row.name
      };
      return data;
    }
  );
  const result = paginatorResult(categories.count, page, perPage);
  return paginate(result, listOfCategories, 'categories');
}

export { getCategoryById, filterAndPaginate };
