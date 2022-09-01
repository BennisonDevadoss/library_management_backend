import UserPolicy from '../policies/user.policy';

import { getUserByid } from '../services/user.service';

import { FastifyReply, FastifyRequest } from 'fastify';

async function canAdd(req: FastifyRequest, reply: FastifyReply) {
  const policy = new UserPolicy(req.currentUser);
  if (!(await policy.canAdd())) {
    reply
      .code(403)
      .send({ errors: ['You are not allowed to perform this action'] });
  }
}

async function canUpdate(req: FastifyRequest, reply: FastifyReply) {
  const { id } = req.params as { id: number };
  const user = await getUserByid(id);
  const policy = new UserPolicy(req.currentUser);
  if (!(await policy.canUpdate(user))) {
    reply
      .code(403)
      .send({ errors: ['You are not allowed to perform this action'] });
  }
}

async function canDetail(req: FastifyRequest, reply: FastifyReply) {
  const policy = new UserPolicy(req.currentUser);
  if (!(await policy.canDetail())) {
    reply
      .code(403)
      .send({ errors: ['You are not allowed to perform this action'] });
  }
}

async function canDelete(req: FastifyRequest, reply: FastifyReply) {
  const policy = new UserPolicy(req.currentUser);
  const { id } = req.params as { id: number };
  const user = await getUserByid(id);
  if (!(await policy.canDelete(user))) {
    reply
      .code(403)
      .send({ errors: ['You are not allowed to perform this action'] });
  }
}

export { canAdd, canUpdate, canDetail, canDelete };
