import { createImage } from '../../controllers/images.controller';
import { FastifyInstance } from 'fastify';

import { Server, IncomingMessage, ServerResponse } from 'http';
import imageCreateRouterOpts from './images-add.router-options';

function imagesPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/books/:id/images',
    schema: imageCreateRouterOpts,
    handler: createImage
  });
  next();
}

export default imagesPrivateRoutes;
