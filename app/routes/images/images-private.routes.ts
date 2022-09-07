import imageCreateRouterOpts from './images-add.router-options';
import imageDeleteRouterOpts from './images-delete.router-options';

import { FastifyInstance } from 'fastify';

import { createImage, deleteImage } from '../../controllers/images.controller';

import { Server, IncomingMessage, ServerResponse } from 'http';

function imagesPrivateRoutes(
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts: any,
  next: (err?: Error) => void
) {
  fastify.route({
    method: 'POST',
    url: '/v1/books/:book_id/images',
    schema: imageCreateRouterOpts,
    handler: createImage
  });
  fastify.route({
    method: 'DELETE',
    url: '/v1/books/:book_id/images/:id',
    schema: imageDeleteRouterOpts,
    handler: deleteImage
  });
  next();
}

export default imagesPrivateRoutes;
