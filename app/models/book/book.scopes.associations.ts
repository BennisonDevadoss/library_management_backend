import { Book, User, Category } from '../index';

function defineScopeAndAssociation() {
  Book.belongsTo(User, {
    foreignKey: 'created_by',
    as: 'users'
  });

  Book.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
  });
}

export default defineScopeAndAssociation;
