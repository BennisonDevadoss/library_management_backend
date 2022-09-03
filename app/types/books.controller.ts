export interface AddBookParams {
  name: string;
  price: number;
  author: string;
  rating?: number;
  category_id: number;
  description?: string;
}

export interface UpdatePookParams {
  name: string;
  price: number;
  author: string;
  description: string;
}

export interface BookListQueryParams {
  q?: string;
  name: string;
  page?: number;
  price: string;
  rating: string;
  author: string;
  per_page?: number;
  description: string;
  category_name: string;
}
