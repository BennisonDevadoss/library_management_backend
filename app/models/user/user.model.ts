import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { UserStatic } from '../../types/user';
import { modelOptions, attributes } from './user.model.attributes';

function UserModelFactory(sequelize: Sequelize): UserStatic {
  return sequelize.define('User', attributes, modelOptions) as UserStatic;
}

const User = UserModelFactory(db);

export default User;
