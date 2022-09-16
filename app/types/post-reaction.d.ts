import { ReactionInstance } from './reaction';

import {
  Model,
  BuildOptions,
  BelongsToGetAssociationMixin
} from 'sequelize';

export enum Reaction {
  sad = 'Sad',
  wow = 'Wow',
  like = 'Like',
  love = 'Love',
  haha = 'Haha',
  angry = 'Angry'
}

export interface PostReactionAttributes {
  id: bigint;
  book_id: bigint;
  user_id: bigint;
  created_at: Date;
  updated_at: Date;
  reaction_id: bigint;
  reaction_change_count: number;
  previous_reaction_id: bigint | null;
}

export type PostReactionCreationAttributes = Pick<
  PostReactionAttributes,
  'book_id' | 'reaction_id' | 'user_id'
>;

export interface PostReactionInstance
  extends Model<PostReactionAttributes, PostReactionCreationAttributes>,
    PostReactionAttributes {
  getReaction: BelongsToGetAssociationMixin<ReactionInstance>;
}

export type PostReactionStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): PostReactionInstance;
};
