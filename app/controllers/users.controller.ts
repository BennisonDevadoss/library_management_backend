import { UserInstance } from '../types';
import { AddUserParams } from '../types/users.controller';
import { add } from '../services/user.service';
import { FastifyReply, FastifyRequest } from 'fastify';

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

export { createUser };
