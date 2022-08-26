interface PaginatorType {
  total: number;
  per_page: number;
  prev_page: number;
  total_pages: number;
  current_page: number;
  is_next_page: boolean;
  is_last_page: boolean;
  is_first_page: boolean;
  next_page: number | null;
}

type PaginatorResult = {
  pagination: PaginatorType;
};

function paginatorResult(count, page: number, perPage: number) {
  return {
    pagination: {
      total: count,
      per_page: perPage,
      current_page: page,
      prev_page: page - 1,
      next_page: page + 1 <= Math.ceil(count / perPage) ? page + 1 : null,
      total_pages: Math.ceil(count / perPage),
      is_next_page: page + 1 <= Math.ceil(count / perPage) ? true : false,
      is_first_page: page === 1,
      is_last_page: perPage * page >= count
    }
  };
}

function paginate(paginateResult: PaginatorResult, data: any[], name: string) {
  return {
    ...paginateResult,
    [name]: data
  };
}

export { paginatorResult, paginate };
