import globalSearchQuery from '../queries/user/user-global-search.query';
import columnSearchQuery from '../queries/user/user-column-search.query';

import { UserInstance } from '../types';
import { Q_MINIMUM_SIZE } from '../config/constants';
import { generateRandomPassword } from '../lib/generate-password';

import { map, size } from 'lodash';
import { Role, User } from '../models';
import { paginate, paginatorResult } from '../lib/paginator-result';
import { AddUserParams, UserListQueryParams } from '../types/users.controller';

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

async function list(query: UserListQueryParams) {
  const page = query.page && query.page > 0 ? query.page : 1;
  const perPage = query.per_page && query.per_page > 0 ? query.per_page : 10;
  const limit = perPage;
  const offSet = (page - 1) * perPage;
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
      role: row.roles?.role
    };
    return userData;
  });
  const result = paginatorResult(users.count, page, perPage);
  return paginate(result, listOfUsers, 'users');
}

export { add, list };
