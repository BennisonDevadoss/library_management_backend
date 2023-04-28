import { headers, adminSecureErrors, pagination } from '../shared-schema';

const categoryListRouterOpts = {
  tags: ['categories'],
  description: 'List categories',
  headers,
  querystring: {
    type: 'object',
    properties: {
      page: { type: 'number' },
      name: { type: 'number' },
      per_page: { type: 'number' }
    }
  },
  response: {
    //   headers,
    200: {
      description: 'list of categories',
      type: 'object',
      properties: {
        pagination,
        categories: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' }
            }
          }
        }
      }
    },
    ...adminSecureErrors
  }
};

export default categoryListRouterOpts;
