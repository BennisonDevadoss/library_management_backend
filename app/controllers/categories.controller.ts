import { filterAndPaginate } from '../services/category.service';
import { CategoryListQueryParms } from '../types';

import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

function listCategories(req: FastifyRequest, reply: FastifyReply) {
  const query = req.query as CategoryListQueryParms;
  filterAndPaginate(query)
    .then((categories) => {
      reply.code(200).send(categories);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { listCategories };
