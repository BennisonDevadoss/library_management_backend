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
    //   headers,
    200: {
      description: 'book detail',
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
        category_name: { type: 'string' },
        user_reaction: { type: ['string', 'null'] },
        post_reactions: {
          type: 'object',
          properties: {
            wow: { type: 'number' },
            sad: { type: 'number' },
            like: { type: 'number' },
            love: { type: 'number' },
            haha: { type: 'number' },
            angry: { type: 'number' },
            dislike: { type: 'number' }
          }
        }
      }
    },
    ...adminSecureErrors
  }
};

export default bookDetailRouterOpts;
