import { adminSecureErrors, headers } from '../shared-schema';

const bookCreateRouterOpts = {
  headers,
  description: 'add book',
  tags: ['books', 'admin'],
  body: {
    type: 'object',
    required: ['name', 'author'],
    properties: {
      name: { type: 'string' },
      price: { type: 'number' },
      author: { type: 'string' },
      rating: { type: 'number' },
      description: { type: 'string' }
    }
  },
  response: {
    // headers,
    201: {
      description: 'newly added book',
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        price: { type: 'number' },
        author: { type: 'string' },
        rating: { type: 'number' },
        category_id: { type: 'number' },
        category_name: { type: 'string' },
        description: { type: ['string', 'null'] }
      }
    },
    ...adminSecureErrors
  }
};

export default bookCreateRouterOpts;
