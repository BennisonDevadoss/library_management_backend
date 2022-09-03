const pagination = {
  type: 'object',
  properties: {
    total: { type: 'number' },
    per_page: { type: 'number' },
    prev_page: { type: 'number' },
    next_page: { type: ['number', 'null'] },
    total_pages: { type: 'number' },
    current_page: { type: 'number' },
    is_first_page: { type: 'boolean' },
    is_next_page: { type: 'boolean' },
    is_last_page: { type: 'boolean' }
  }
};

export { pagination };
