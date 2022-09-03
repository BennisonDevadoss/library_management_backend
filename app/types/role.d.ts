import { BuildOptions, Model } from 'sequelize';

export interface RoleAttributes {
  id: bigint;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export type RoleCreationAttributes = Pick<RoleAttributes, 'name'>;

export interface RoleInstance
  extends Model<RoleAttributes, RoleCreationAttributes>,
    RoleAttributes {}

export type RoleStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): RoleInstance;
};
