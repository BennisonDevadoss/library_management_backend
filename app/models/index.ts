import User from './user/user.model';
import Role from './role/role.model';
import Book from './book/book.model';
import Post from './post/post.model';
import Comment from './comment/comment.model';
import Reaction from './reaction/reaction.model';
import Category from './category/category.model';
import PostReaction from './post-reaction/post-reaction.model';

import userScopeAndAssociation from './user/user.scopes.associations';
import BookScopeAndAssociation from './book/book.scopes.associations';
import PostReactionScopeAndAssociation
from './post-reaction/post-reaction.scopes.associations';

userScopeAndAssociation();
BookScopeAndAssociation();
PostReactionScopeAndAssociation();

export { User, Role, Book, Post, Comment, Reaction, Category, PostReaction };
