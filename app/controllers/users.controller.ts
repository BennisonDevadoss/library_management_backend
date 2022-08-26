import { add, list } from '../services/user.service';
import { UserInstance } from '../types';
import { AddUserParams, UserListQueryParams } from '../types/users.controller';

import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

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

export { createUser, listUser };
