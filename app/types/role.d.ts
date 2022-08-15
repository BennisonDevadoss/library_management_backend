import { BuildOptions, Model } from 'sequelize/types';

export interface RoleAttributes {
  id: bigint;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export type RoleCreationAttributes = Pick<RoleAttributes, 'role'>;

export interface RoleInstance
  extends Model<RoleAttributes, RoleCreationAttributes>,
    RoleAttributes {}

export type RoleStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): RoleInstance;
};
