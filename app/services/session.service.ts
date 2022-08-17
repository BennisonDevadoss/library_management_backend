import bcrypt from 'bcrypt';
import SessionError from '../exceptions/session.errors';

import { User } from '../models';
import { UserInstance } from '../types';
import { sign as jwtSign } from 'jsonwebtoken';
import { LoginBodyParams } from '../types/sessions.controller';
import { EmptyResultError } from 'sequelize';
import { RoleInstance } from 'app/types/role';

async function validatePassword(
  currentUser: UserInstance,
  password: string
): Promise<void> {
  const isPasswordMatched: boolean = await bcrypt.compareSync(
    password,
    currentUser.encrypted_password
  );
  if (!isPasswordMatched) {
    throw new SessionError('Invalid email or password');
  }
}

async function markSignIn(
  user: UserInstance,
  attrs: LoginBodyParams
): Promise<UserInstance> {
  const { id, email } = user;
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwtSign({ id, email }, secretKey);
  const userUpdateAttributes = {
    access_token: token,
    current_sign_in_at: new Date(),
    sign_in_count: user.sign_in_count + 1,
    current_sign_in_ip: attrs.ipAddress,
    last_sign_in_ip: user.current_sign_in_ip,
    last_sign_in_at: user.current_sign_in_at
  };
  const updatedUser = await user.update(userUpdateAttributes);
  const userRole = await updatedUser.getRoles();
  updatedUser.role = userRole.role;
  return updatedUser;
}

async function getUserByEmail(email: string): Promise<UserInstance> {
  const user: UserInstance | null = await User.findOne({
    where: { email: email }
  });
  if (user) {
    return user;
  } else {
    throw new EmptyResultError('User not found');
  }
}

async function signin(signinAttrs: LoginBodyParams): Promise<UserInstance> {
  try {
    const currentUser = await getUserByEmail(signinAttrs.email);
    await validatePassword(currentUser, signinAttrs.password);
    return await markSignIn(currentUser, signinAttrs);
  } catch (error) {
    throw new SessionError('Invali email or password');
  }
}

async function signout(user): Promise<UserInstance> {
  return user.update({ access_token: null });
}

export { signin, signout };
