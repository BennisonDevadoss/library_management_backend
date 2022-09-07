import routes from './routes';
import logger from './config/logger';
import swagger from 'fastify-swagger';
import swaggerOptions from './config/swagger-options';
import fastifyMultipart from 'fastify-multipart';

import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger
  });

function build() {
  server.register(fastifyMultipart);
  server.register(swagger, swaggerOptions);
  server.register(routes);
  return server;
}

export default build;
