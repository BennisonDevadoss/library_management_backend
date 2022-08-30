import User from './user/user.model';
import Role from './role/user.model';
import Book from './book/book.model';

import userScopeAndAssociation from './user/user.scopes.associations';
import BookScopeAndAssociation from './book/book.scopes.associations';

userScopeAndAssociation();
BookScopeAndAssociation();

export { User, Role, Book };
