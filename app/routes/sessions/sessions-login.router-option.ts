import { adminSecureErrors, headers } from '../shared-schema';

const loginRouterOpts = {
  description: 'post login credentials',
  tags: ['admin', 'agent', 'sessions'],
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string' },
      password: { type: 'string' }
    }
  },
  headers,
  response: {
    200: {
      description: 'successfully logged in',
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        role: { type: 'string' },
        email: { type: 'string' },
        sign_in_count: { type: 'number' },
        last_sign_in_ip: { type: 'string' },
        current_sign_in_ip: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default loginRouterOpts;
