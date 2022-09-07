import { headers, adminSecureErrors } from '../shared-schema';

const imageDeleteRouterOpts = {
  headers,
  description: 'delete image',
  params: {
    type: 'object',
    required: ['id', 'book_id'],
    properties: {
      id: { type: 'number' },
      book_id: { type: 'number' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default imageDeleteRouterOpts;
