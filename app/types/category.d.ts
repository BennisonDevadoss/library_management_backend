import { BuildOptions, Model } from 'sequelize';

export interface CategoryAttributes {
  id: bigint;
  name: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export type CategoryCreationAttrs = Pick<
  CategoryAttributes,
  'created_by' | 'name'
>;

export interface CategoryInstance
  extends Model<CategoryAttributes, CategoryCreationAttrs>,
    CategoryAttributes {}

export type CategoryStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): CategoryInstance;
};
