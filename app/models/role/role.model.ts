import db from '../../config/database';

import { Sequelize } from 'sequelize';
import { RoleStatic } from '../../types/role';

import { attributes, modelOptions } from './role.model.attributes';

function roleModelFactory(sequelize: Sequelize) {
  return sequelize.define('roles', attributes, modelOptions) as RoleStatic;
}

const Role = roleModelFactory(db);

export default Role;
