import { adminSecureErrors } from '../shared-schema';

const userCreateRoutesOpts = {
  description: 'add user',
  tags: ['users', 'admin'],
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
    201: {
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

export default userCreateRoutesOpts;
