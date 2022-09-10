import PostReaction from
'../models/post-reaction/post-reaction.model.attributes';

import { getBookById } from './book.service';
import { UserInstance } from '../types';
import { AddPostReactionParams } from '../types/post-reactions.controller';

async function create(
  bookId: number,
  attrs: AddPostReactionParams,
  currentUser: UserInstance
) {
  const book = await getBookById(bookId);
  const postReactionAttrs = {
    book_id: book.id,
    user_id: currentUser.id,
    reaction: attrs.reaction
  };
  const postReaction = PostReaction.create(postReactionAttrs);
  return postReaction;
}

export { create };
