import { BuildOptions, Model } from 'sequelize';

export interface ImageAttributes {
  id: bigint;
  image: string;
  book_id: bigint;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  created_by: bigint;
  updated_by: bigint;
}

export type ImageCreationAttributes = Pick<
  ImageAttributes,
  'book_id' | 'image' | 'created_by'
>;

export interface ImageInstance
  extends Model<ImageAttributes, ImageCreationAttributes>,
    ImageAttributes {}

export type ImageStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): ImageInstance;
};
