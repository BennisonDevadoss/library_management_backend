import { Reaction } from './post-reaction';

export interface AddPostReactionParams {
  user_id: number;
  book_id: number;
  reaction: Reaction;
}
