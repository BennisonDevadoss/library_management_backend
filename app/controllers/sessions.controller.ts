import { signin } from '../services/session.service';
import { LoginBodyParams } from '../types/sessions.controller';
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

export { login };
