import { adminSecureErrors, headers } from '../shared-schema';

const commentCreateRouterOpts = {
  description: 'write a comment about this post',
  headers,
  tags: ['admin', 'agent', 'comments'],
  params: {
    type: 'object',
    required: ['book_id'],
    properties: {
      book_id: { type: 'number' }
    }
  },
  body: {
    type: 'object',
    required: ['comment'],
    properties: {
      Comment: { type: 'string' }
    }
  },
  response: {
    201: {
      description: 'newly added post',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          comment: { type: 'string' },
          user_id: { type: 'number' },
          book_id: { type: 'number' }
        }
      }
    },
    ...adminSecureErrors
  }
};

export default commentCreateRouterOpts;
