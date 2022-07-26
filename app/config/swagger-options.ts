import { trimStart } from 'lodash';
import { SwaggerOptions } from 'fastify-swagger';

const baseUrl = trimStart(process.env.BASE_URL, 'https://');

const tagOptions = [
  {
    name: 'sessions',
    description: 'routes related to sessions'
  },
  {
    name: 'admin',
    description: 'routes related to admin'
  },
  {
    name: 'agent',
    description: 'routes related to agent'
  },
  {
    name: 'users',
    description: 'routes related to users'
  },
  {
    name: 'books',
    description: 'routes related to books'
  },
  {
    name: 'posts',
    description: 'routes related to posts'
  },
  {
    name: 'post-reactions',
    description: 'routes related to post reactions'
  },
  {
    name: 'comments',
    description: 'routes related to comments'
  },
  {
    name: 'categories',
    description: 'routes related to categories'
  }
];

const swaggerOptions: SwaggerOptions = {
  routePrefix: '/doc',
  exposeRoute: true,
  swagger: {
    tags: tagOptions,
    host: baseUrl,
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more information here'
    },
    info: {
      title: 'LIBRARY MANAGEMENT API',
      description:
        /*eslint-disable */
        'Building a blazing fast REST API with Node.js, Postgresql, Fastify and Swagger',
      /*eslint-disable */
      version: '1.0.0'
    }
  }
};

export default swaggerOptions;
