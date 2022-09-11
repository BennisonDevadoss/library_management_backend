import { BuildOptions, Model } from 'sequelize/types';

export interface CommentAttributes {
  id: bigint;
  comment: string;
  book_id: bigint;
  user_id: bigint;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export type CommentCreationAttributes = Pick<
  CommentAttributes,
  'book_id' | 'comment' | 'user_id'
>;

export interface CommentInstance
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {}

export type CommentStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): CommentInstance;
};
