import { adminSecureErrors, headers } from '../shared-schema';

const bookUpdateRouterOpts = {
  tags: ['admin', 'books'],
  description: 'update book',
  headers,
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' }
    }
  },
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      author: { type: 'string' },
      price: { type: 'string' },
      description: { type: 'string' }
    }
  },
  response: {
    headers,
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        price: { type: 'string' },
        author: { type: 'string' },
        rating: { type: 'number' },
        description: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default bookUpdateRouterOpts;
