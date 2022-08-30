import User from '../user/user.model';
import Book from './book.model';

function defineScopeAndAssociation() {
  Book.belongsTo(User, {
    foreignKey: 'created_by',
    as: 'users'
  });
}

export default defineScopeAndAssociation;
