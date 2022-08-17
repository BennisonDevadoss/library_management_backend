const headers = {
  description: 'bearer token',
  type: 'object',
  required: ['Authorization'],
  properties: {
    Authorization: { type: 'string' }
  }
};

export { headers };
