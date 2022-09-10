import { getBookById } from './book.service';
import { UserInstance } from '../types';
import { EmptyResultError } from 'sequelize';
import { AddPostReactionParams } from '../types/post-reactions.controller';

import { PostReaction, Reaction } from '../models';

async function getReactioById(id: number) {
  const reaction = await Reaction.findByPk(id);
  if (!reaction) {
    throw new EmptyResultError('Reaction not found');
  }
  return reaction;
}
async function create(
  bookId: number,
  attrs: AddPostReactionParams,
  currentUser: UserInstance
) {
  const { reaction_id: reactionId } = attrs;
  const book = await getBookById(bookId);
  const reaction = await getReactioById(reactionId);
  const postReactionAttrs = {
    book_id: book.id,
    user_id: currentUser.id,
    reaction_id: reaction.id
  };
  const postReaction = await PostReaction.create(postReactionAttrs);
  return {
    ...postReaction.toJSON() /* .toJSON() to serialized the json values */,
    reaction_name: reaction.name
  };
}

export { create };
