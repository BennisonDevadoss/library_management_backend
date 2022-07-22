import logger from './config/logger';
import swagger from 'fastify-swagger';
import swaggerOptions from './config/swagger-options';

import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: FastifyInstance<
Server,
IncomingMessage,
ServerResponse
> = fastify({
  logger
});

function build() {
  server.register(swagger, swaggerOptions);
  return server;
}

export default build;
