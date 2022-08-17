import { headers, adminSecureErrors } from '../shared-schema';

const logoutRouterOpts = {
  description: 'delete user session',
  headers,
  response: {
    200: {
      description: 'successfully logged out',
      type: 'object',
      properties: {
        message: { type: 'array', items: { type: 'string' } }
      }
    },
    ...adminSecureErrors
  }
};

export default logoutRouterOpts;
