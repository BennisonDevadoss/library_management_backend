import { User } from '../models';

import { UserInstance } from '../types';
import { AddUserParams } from '../types/users.controller';
import { generateRandomPassword } from '../lib/generate-password';

async function add(attrs: AddUserParams, currentUser: UserInstance) {
  const defaultPassword = generateRandomPassword();
  const userCreateAttrs = {
    ...attrs,
    password: defaultPassword,
    created_by: currentUser.id,
    password_confirmation: defaultPassword
  };
  const user = await User.create(userCreateAttrs);
  // sendInvitation(user);
  const userRole = await user.getRoles();
  const userData = {
    ...user,
    role: userRole.role
  };
  return userData;
}

export { add };
