import { adminSecureErrors, headers } from '../shared-schema';

const postCreateRouterOpts = {
  /*eslint-disable */
  description:
    'Upload post. Send the file in form-data with key as post and the Content-Type should be multipart/form-data',
  headers,
  tags: ['admin', 'agent', 'posts'],
  params: {
    type: 'object',
    required: ['book_id'],
    properties: {
      book_id: { type: 'number' }
    }
  },
  response: {
    201: {
      description: 'newly added post',
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default postCreateRouterOpts;
