import { headers, adminSecureErrors } from '../shared-schema';

const userCreateRouterOpts = {
  description: 'add user',
  tags: ['users', 'admin'],
  headers,
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      role_id: { type: 'number' },
      mobile_no: { type: 'string' }
    }
  },
  response: {
    headers,
    201: {
      description: 'newly added user',
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        role: { type: 'string' },
        email: { type: 'string' },
        mobile_no: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default userCreateRouterOpts;
