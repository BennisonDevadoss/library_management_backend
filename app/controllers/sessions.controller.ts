import { LoginBodyParams } from '../types/sessions.controller';

import { signin, signout } from '../services/session.service';
import { FastifyReply, FastifyRequest } from 'fastify';

function login(req: FastifyRequest, reply: FastifyReply) {
  const loginParams = req.body as LoginBodyParams;
  loginParams.ipAddress = req.ip;
  signin(loginParams)
    .then((user) => {
      reply.header('Authorization', `Bearer ${user.access_token}`);
      reply.code(200).send(user);
    })
    .catch((error) => {
      reply.send(error);
    });
}

function logout(req: FastifyRequest, reply: FastifyReply) {
  signout(req.currentUser)
    .then(() => {
      reply.header('Authorization', null);
      reply.code(200).send({ message: ['Successfully logged out'] });
    })
    .catch((error) => {
      reply.send(error);
    });
}
export { login, logout };
