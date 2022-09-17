import { Comment } from '../models';
import { getBookById } from './book.service';
import { UserInstance } from '../types';
import { AddCommentParams } from '../types/comments.controller';

async function create(
  bookId: number,
  attrs: AddCommentParams,
  currentUser: UserInstance
) {
  const book = await getBookById(bookId);
  const CommentAttrs = {
    book_id: book.id,
    comment: attrs.comment,
    user_id: currentUser.id
  };
  await Comment.create(CommentAttrs);
  return await book.getComments();
}

export { create };
