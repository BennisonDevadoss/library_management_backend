import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { USER_ROLE } from '../../config/constants';
import { UserStatic } from '../../types/user';

import { modelOptions, attributes } from './user.model.attributes';

function UserModelFactory(sequelize: Sequelize): UserStatic {
  return sequelize.define('User', attributes, modelOptions) as UserStatic;
}

const User = UserModelFactory(db);

User.prototype.isAdmin = async function (): Promise<boolean> {
  const user = await this.getRoles();
  return user.name === USER_ROLE.admin;
};

User.prototype.isAgent = async function (): Promise<boolean> {
  const user = await this.getRoles();
  return user.name === USER_ROLE.agent;
};

export default User;
