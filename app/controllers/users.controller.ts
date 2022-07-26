import { UserInstance } from '../types';

import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

import {
  add,
  list,
  detail,
  update,
  destroy
} from '../services/user.service';
import {
  AddUserParams,
  UserUpdateParams,
  UserListQueryParams
} from '../types/users.controller';

function createUser(req: FastifyRequest, reply: FastifyReply) {
  const currentUser = req.currentUser as UserInstance;
  const params = req.body as AddUserParams;
  add(params, currentUser)
    .then((user) => {
      reply.code(201).send(user);
    })
    .catch((error) => {
      reply.send(error);
    });
}

function listUser(req: FastifyRequest, reply: FastifyReply) {
  const query = req.query as UserListQueryParams;
  list(query)
    .then((users) => {
      reply.code(200).send(users);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

function deleteUser(req: FastifyRequest, reply: FastifyReply) {
  const currentUser: UserInstance = req.currentUser;
  const { id } = req.params as { id: number };
  destroy(id, currentUser)
    .then(() => {
      reply.code(200).send({ message: ['user deleted successfully'] });
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

function detailUser(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  detail(id)
    .then((user) => {
      reply.code(200).send(user);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

function updateUser(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  const params = req.body as UserUpdateParams;
  const currentUser: UserInstance = req.currentUser;
  update(id, params, currentUser)
    .then((user) => {
      reply.code(200).send(user);
    })
    .catch((error: Error) => {
      reply.send(error);
    });
}
export { createUser, listUser, deleteUser, detailUser, updateUser };
