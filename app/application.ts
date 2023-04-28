import cors from '@fastify/cors';
import routes from './routes';
import logger from './config/logger';
import swagger from '@fastify/swagger';
import fastifyMultipart from 'fastify-multipart';

import { fastifySensible } from '@fastify/sensible';
import { fastifySwaggerUi } from '@fastify/swagger-ui';

import fastify, { FastifyInstance } from 'fastify';
import { swaggerOptions, swaggerUiOptions } from './config/swagger-options';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger
  });

function build() {
  server.register(cors, {
    origin: '*',
    methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: 'Authorization'
  });
  server.register(fastifySensible);
  /* NOTE: ADD EXTRA MORE UTIALITIES (NOT YET USED ANYWHERE IN THE APPLICATION,
    NEED TO ANALYZIE ABOUT THIS PACKAGE) */
  server.register(fastifyMultipart);
  server.register(swagger, swaggerOptions);
  server.register(fastifySwaggerUi, swaggerUiOptions);
  server.register(routes);
  return server;
}

export default build;
