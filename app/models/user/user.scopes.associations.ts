import User from './user.model';
import Role from '../role/user.model';

User.hasOne(Role, {
  foreignKey: 'role_id',
  as: 'role'
});
