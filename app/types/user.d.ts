import { Model, BuildOptions, HasOneGetAssociationMixin } from 'sequelize';
import { RoleInstance } from './role';

export interface UserAttributes {
  id: bigint;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  created_by: bigint;
  updated_by: bigint;
  sign_in_count: number;
  deleted_at: Date | null;
  last_sign_in_ip: string;
  current_sign_in_at: Date;
  current_sign_in_ip: string;
  encrypted_password: string;
  access_token: string | null;
  password_confirmation: string;
}

export type UserCreateAttributes = Pick<UserAttributes, 'email' | 'name'>;

export interface UserInstance
  extends Model<UserAttributes, UserCreateAttributes>,
    UserAttributes {
  role?: RoleInstance;
  getRoles: () => any;
}

export type UserStatic = typeof Model & {
  new (value?: object, options?: BuildOptions): UserInstance;
};
