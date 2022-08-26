import { headers, adminSecureErrors, pagination } from '../shared-schema';

const userListRouterOpts = {
  description: 'list users',
  tags: ['admin', 'agent'],
  headers,
  querystring: {
    type: 'object',
    properties: {
      q: { type: 'string' },
      page: { type: 'number' },
      name: { type: 'string' },
      role: { type: 'string' },
      email: { type: 'string' },
      per_page: { type: 'number' },
      mobile_no: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        headers,
        pagination,
        users: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              role: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' },
              mobile_no: { type: 'string' }
            }
          }
        }
      }
    },
    ...adminSecureErrors
  }
};

export default userListRouterOpts;
