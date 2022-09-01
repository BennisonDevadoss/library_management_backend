import { adminSecureErrors, headers } from '../shared-schema';

const userUpdateRouterOpts = {
  headers,
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' }
    }
  },
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      role_id: { type: 'number' },
      mobile_no: { type: 'string' }
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
        mobile_no: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default userUpdateRouterOpts;
