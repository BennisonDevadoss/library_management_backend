import globalSearchQuery from '../queries/user/user-global-search.query';
import columnSearchQuery from '../queries/user/user-column-search.query';

import { UserInstance } from '../types';
import { Q_MINIMUM_SIZE } from '../config/constants';
import { EmptyResultError } from 'sequelize';
import { generateRandomPassword } from '../lib/generate-password';

import { map, size } from 'lodash';
import { Role, User } from '../models';
import { paginate, paginatorResult } from '../lib/paginator-result';

import {
  AddUserParams,
  UserUpdateParams,
  UserListQueryParams
} from '../types/users.controller';

async function getUserByid(id: number) {
  const user = await User.findByPk(id);
  if (!user) {
    throw new EmptyResultError('user not found');
  }
  return user;
}

async function add(attrs: AddUserParams, currentUser: UserInstance) {
  const defaultPassword = generateRandomPassword();
  const userCreateAttrs = {
    ...attrs,
    password: defaultPassword,
    created_by: currentUser.id,
    password_confirmation: defaultPassword
  };
  const user = await User.create(userCreateAttrs);
  const userRole = await user.getRoles();
  const userData = {
    ...user.toJSON(),
    role: userRole.name
  };
  return userData;
}

async function list(query: UserListQueryParams) {
  const page = query.page && query.page > 0 ? query.page : 1;
  const perPage = query.per_page && query.per_page > 0 ? query.per_page : 10;
  const offSet = (page - 1) * perPage;
  const limit = perPage;
  const queries =
    size(query.q) >= Q_MINIMUM_SIZE ? globalSearchQuery(query.q) : {};
  const columnQuery = columnSearchQuery(query);

  const users = await User.findAndCountAll({
    limit: limit,
    offset: offSet,
    where: { ...queries, ...columnQuery },
    include: [
      {
        model: Role,
        as: 'roles'
      }
    ]
  });
  const listOfUsers = map(users.rows, (row: UserInstance) => {
    const userData = {
      id: row.id,
      name: row.name,
      email: row.email,
      mobileNo: row.mobile_no,
      role: row.roles?.name
    };
    return userData;
  });
  const result = paginatorResult(users.count, page, perPage);
  return paginate(result, listOfUsers, 'users');
}

async function destroy(id: number, currentUser: UserInstance) {
  if (id === Number(currentUser.id))
    throw new Error('Oops! You are trying to delete you');
  const user = await getUserByid(id);
  return user.destroy();
}

async function detail(id: number) {
  const user = await User.findOne({
    where: { id: id },
    include: [
      {
        model: Role,
        as: 'roles'
      }
    ]
  });
  if (!user) throw new EmptyResultError('user not found');
  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.roles?.name,
    mobileNo: user.mobile_no
  };
  return userData;
}

async function update(
  id: number,
  attrs: UserUpdateParams,
  currentUser: UserInstance
) {
  const user = await getUserByid(id);
  const userUpdateAttrs = {
    ...attrs,
    updated_by: currentUser.id
  };
  await user.update(userUpdateAttrs);
  const userRole = await user.getRoles();
  const updatedUser = {
    ...user.toJSON(),
    role: userRole.name
  };
  return updatedUser;
}

export { add, list, detail, update, destroy, getUserByid };
