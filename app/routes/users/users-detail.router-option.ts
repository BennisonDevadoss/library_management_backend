import { headers, adminSecureErrors } from '../shared-schema';
const userDetailRouterOpts = {
  tags: ['admin', 'users'],
  description: 'user detail',
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
        role: { type: 'string' },
        email: { type: 'string' },
        mobileNo: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default userDetailRouterOpts;
