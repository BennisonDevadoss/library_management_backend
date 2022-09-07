import { adminSecureErrors, headers } from '../shared-schema';

const imageCreateRouterOpts = {
  /*eslint-disable */
  description:
    'Upload Image. Send the file in form-data with key as image and the Content-Type should be multipart/form-data',
  headers,
  tags: ['admin', 'agent', 'images'],
  params: {
    type: 'object',
    required: ['book_id'],
    properties: {
      book_id: { type: 'number' }
    }
  },
  response: {
    201: {
      description: 'newly added image',
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    ...adminSecureErrors
  }
};

export default imageCreateRouterOpts;
