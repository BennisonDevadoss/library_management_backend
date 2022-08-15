import User from '../models/user/user.model';

import { verify } from 'jsonwebtoken';
import { UserInstance } from '../types';

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const { JWT_SECRET_KEY = '' } = process.env;

function getHeaderToken(headers: any) {
  const bearerHeader = headers.authorization;
  const bearer = bearerHeader ? bearerHeader.split(' ') : [];
  const bearerToken = bearer[1];
  return bearerToken;
}

async function verifyToken(token: string, secretKey: string) {
  return await verify(token, secretKey);
}

declare module 'fastify' {
  interface FastifyRequest {
    currentUser: UserInstance;
  }
}

function userAuthenticate(fastify: FastifyInstance) {
  fastify.decorateRequest('currentUser', null);
  fastify.addHook(
    'preHandler',
    async function (req: FastifyRequest, reply: FastifyReply) {
      const token = getHeaderToken(req.headers);
      if (!token) {
        const error = ['You need to sign-in to access this page'];
        reply.code(401).send({ errors: error });
      } else {
        try {
          const userAttrs = await verifyToken(token, JWT_SECRET_KEY);
          const user = await User.findByPk(userAttrs.id);
          if (user && user.access_token === token) {
            req.currentUser = user;
            reply.header('Authorization', `Bearer ${token}`);
          } else {
            const error = ['session has expired'];
            reply.code(440).send(error);
          }
        } catch (error) {
          reply.code(440).send({ errors: ['session has expired'] });
        }
      }
    }
  );
}

export default userAuthenticate;
