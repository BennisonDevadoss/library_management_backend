import { BuildOptions, Model } from 'sequelize';

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
  description?: string;
}

export type BookCreateAttributes = Pick<
  BookAttributes,
  'name' | 'price' | 'author' | 'rating' | 'description'
>;

export interface BookInstance
  extends Model<BookAttributes, BookCreateAttributes> {}

export type BookStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): BookInstance;
};
