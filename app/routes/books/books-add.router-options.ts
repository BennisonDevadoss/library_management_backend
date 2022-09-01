import { adminSecureErrors, headers } from '../shared-schema';

const bookCreateRoutesOpts = {
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
    headers,
    201: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        price: { type: 'number' },
        author: { type: 'string' },
        rating: { type: 'number' },
        description: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default bookCreateRoutesOpts;
