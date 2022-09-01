import User from './user.model';
import Role from '../role/role.model';

function defineScopeAndAssociation() {
  User.belongsTo(Role, {
    foreignKey: 'role_id',
    as: 'roles'
  });
}

export default defineScopeAndAssociation;
