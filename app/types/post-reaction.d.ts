import { BuildOptions, Model } from 'sequelize';

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
  reaction: Reaction;
  book_id: bigint;
  user_id: bigint;
  reaction_change_count: number;
  previous_reaction: Reaction | null;
  created_at: Date;
  updated_at: Date;
}

export type PostReactionCreationAttributes = Pick<
  PostReactionAttributes,
  'book_id' | 'reaction' | 'user_id'
>;

export interface PostReactionInstance
  extends Model<PostReactionAttributes, PostReactionCreationAttributes>,
    PostReactionAttributes {}

export type PostReactionStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): PostReactionInstance;
};
