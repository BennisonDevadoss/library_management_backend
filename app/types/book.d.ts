import { CommentInstance } from './comment';
import { CategoryInstance } from './category';

import { BelongsToGetAssociationMixin, BuildOptions, Model } from 'sequelize';

export interface BookAttributes {
  id: bigint;
  name: string;
  price: number;
  author: string;
  rating?: number;
  created_at: Date;
  updated_at: Date;
  created_by: bigint;
  updated_by?: bigint;
  category_id: bigint;
  description?: string;
}

export type BookCreateAttributes = Pick<
  BookAttributes,
  'name' | 'price' | 'author' | 'rating' | 'description'
>;

export interface BookInstance
  extends Model<BookAttributes, BookCreateAttributes>,
    BookAttributes {
  getCategory: BelongsToGetAssociationMixin<CategoryInstance>;
  getComments: BelongsToGetAssociationMixin<CommentInstance>;
  category: CategoryInstance;
}

export type BookStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): BookInstance;
};
