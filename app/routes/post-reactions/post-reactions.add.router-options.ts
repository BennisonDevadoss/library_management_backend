import { adminSecureErrors, headers } from '../shared-schema';

const postReactionCreateRouterOpts = {
  headers,
  description: 'add post reaction',
  tags: ['admin', 'agent', 'post-reactions'],
  params: {
    type: 'object',
    properties: {
      book_id: { type: 'number' }
    }
  },
  body: {
    type: 'object',
    requeired: ['reaction'],
    properties: {
      reaction: {
        type: 'string',
        enum: ['like', 'love', 'wow', 'haha', 'angry']
      }
    }
  },
  response: {
    headers,
    201: {
      description: 'newly added post reaction',
      type: 'object',
      properties: {
        id: { type: 'number' },
        book_id: { type: 'number' },
        user_id: { type: 'number' },
        reaction_id: { type: 'number' },
        reaction_name: { type: 'string' },
        reaction_change_count: { type: 'number' },
        previous_reaction: {
          type: ['string', 'null']
        }
      }
    },
    ...adminSecureErrors
  }
};

export default postReactionCreateRouterOpts;
