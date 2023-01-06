import { headers, adminSecureErrors, pagination } from '../shared-schema';

const bookListRouterOpts = {
  description: 'List books',
  tags: ['admin', 'books'],
  headers,
  querystring: {
    type: 'object',
    properties: {
      q: { type: 'string' },
      page: { type: 'number' },
      name: { type: 'string' },
      price: { type: 'string' },
      rating: { type: 'string' },
      author: { type: 'string' },
      per_page: { type: 'number' },
      description: { type: 'string' }
    }
  },
  response: {
    //   headers,
    200: {
      description: 'list of books',
      type: 'object',
      properties: {
        pagination,
        books: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              name: { type: 'string' },
              price: { type: 'number' },
              rating: { type: 'number' },
              author: { type: 'string' },
              category_id: { type: 'number' },
              description: { type: 'string' },
              category_name: { type: 'string' }
            }
          }
        }
      }
    },
    ...adminSecureErrors
  }
};

export default bookListRouterOpts;
