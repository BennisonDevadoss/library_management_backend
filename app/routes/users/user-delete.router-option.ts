import { headers, adminSecureErrors } from '../shared-schema';

const userDeleteRouterOpts = {
  headers,
  tags: ['admin', 'users', 'users'],
  description: 'delete user',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' }
    }
  },
  response: {
    // headers,
    200: {
      description: 'user deleted',
      type: 'object',
      properties: {
        message: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      }
    },
    ...adminSecureErrors
  }
};

export default userDeleteRouterOpts;
