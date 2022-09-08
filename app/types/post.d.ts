import { BuildOptions, Model } from 'sequelize';

export interface PostAttributes {
  id: bigint;
  post: string;
  book_id: bigint;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  created_by: bigint;
  updated_by: bigint;
}

export type PostCreationAttributes = Pick<
  PostAttributes,
  'book_id' | 'post' | 'created_by'
>;

export interface PostInstance
  extends Model<PostAttributes, PostCreationAttributes>,
    PostAttributes {}

export type PostStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): PostInstance;
};
