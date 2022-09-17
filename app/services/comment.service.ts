import { Comment } from '../models';
import { getBookById } from './book.service';
import { UserInstance } from '../types';
import { AddPostCommentParams } from '../types/comments.controller';

async function create(
  bookId: number,
  attrs: AddPostCommentParams,
  currentUser: UserInstance
) {
  const book = await getBookById(bookId);
  const postCommentAttrs = {
    book_id: book.id,
    comment: attrs.comment,
    user_id: currentUser.id
  };
  await Comment.create(postCommentAttrs);
  return await book.getComments();
}

export { create };
