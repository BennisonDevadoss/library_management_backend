import { headers, adminSecureErrors } from '../shared-schema';

const postDeleteRouterOpts = {
  headers,
  tags: ['admin', 'agent', 'posts'],
  description: 'delete post',
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
      description: 'post deleted',
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default postDeleteRouterOpts;
