import { headers, adminSecureErrors } from '../shared-schema';

const bookDeleteRouterOpts = {
  headers,
  tags: ['admin', 'books'],
  description: 'delete book',
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  },
  response: {
    headers,
    200: {
      description: 'book deleted',
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      }
    },
    ...adminSecureErrors
  }
};

export default bookDeleteRouterOpts;
