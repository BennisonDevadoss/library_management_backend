import { adminSecureErrors, headers } from '../shared-schema';

export const bookDetailRoutesOpts = {
  tags: ['admin', 'books'],
  descripton: 'detail books',
  headers,
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' }
    }
  },
  response: {
    headers,
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        price: { type: 'number' },
        author: { type: 'string' },
        rating: { type: 'number' },
        mobile_no: { type: 'string' },
        description: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default bookDetailRoutesOpts;
