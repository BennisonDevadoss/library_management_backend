import User from './user/user.model';
import Role from './role/role.model';
import Book from './book/book.model';
import Image from './image/image.model';
import Category from './category/category.model';

import userScopeAndAssociation from './user/user.scopes.associations';
import BookScopeAndAssociation from './book/book.scopes.associations';

userScopeAndAssociation();
BookScopeAndAssociation();

export { User, Role, Book, Image, Category };
