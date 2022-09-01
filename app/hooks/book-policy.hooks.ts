import BookPolicy from '../policies/book.policy';

import { UserInstance } from '../types';
import { FastifyRequest, FastifyReply } from 'fastify';

async function canAdd(req: FastifyRequest, reply: FastifyReply) {
  const currentUser: UserInstance = req.currentUser;
  const policy = new BookPolicy(currentUser);
  if (!(await policy.canCreate())) {
    reply
      .code(403)
      .send({ errors: ['You are not allowed to perform this action'] });
  }
}

async function canDetail(req: FastifyRequest, reply: FastifyReply) {
  const currentUser: UserInstance = req.currentUser;
  const policy = new BookPolicy(currentUser);
  if (!(await policy.canDetail())) {
    reply
      .code(403)
      .send({ errors: ['You are not allowed to perform this action'] });
  }
}

async function canUpdate(req: FastifyRequest, reply: FastifyReply) {
  const currentUser: UserInstance = req.currentUser;
  const policy = new BookPolicy(currentUser);
  if (!(await policy.canUpdate())) {
    reply.code(403).send({
      errors: ['You are not allowed to perform this action']
    });
  }
}

async function canDelete(req: FastifyRequest, reply: FastifyReply) {
  const currentUser: UserInstance = req.currentUser;
  const policy = new BookPolicy(currentUser);
  if (!(await policy.canDelete())) {
    reply.code(403).send({
      errors: ['You are not allowed to perform this action']
    });
  }
}

export { canAdd, canDelete, canDetail, canUpdate };
