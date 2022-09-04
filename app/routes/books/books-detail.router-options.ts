import { adminSecureErrors, headers } from '../shared-schema';

export const bookDetailRouterOpts = {
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
        category_id: { type: 'number' },
        description: { type: 'string' },
        category_name: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default bookDetailRouterOpts;
