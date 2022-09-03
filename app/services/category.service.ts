import { Category } from '../models';
import { EmptyResultError } from 'sequelize';

async function getCategoryById(id: number) {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new EmptyResultError('category not found');
  }
  return category;
}

export { getCategoryById };
