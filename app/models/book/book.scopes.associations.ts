import { Book, User, Comment, Category } from '../index';

function defineScopeAndAssociation() {
  Book.belongsTo(User, {
    foreignKey: 'created_by',
    as: 'users'
  });

  Book.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
  });

  Book.hasMany(Comment, {
    foreignKey: 'book_id',
    as: 'comments'
  })
}

export default defineScopeAndAssociation;
