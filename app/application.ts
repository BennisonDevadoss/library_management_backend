import cors from 'fastify-cors';
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
  server.register(cors);
  server.register(fastifyMultipart);
  server.register(routes);
  server.register(swagger, swaggerOptions);
  return server;
}

export default build;
