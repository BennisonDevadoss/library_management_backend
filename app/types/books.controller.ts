export interface AddBookParams {
  name: string;
  price: number;
  author: string;
  rating?: number;
  description?: string;
}

export interface UpdatePookParams {
  name: string;
  price: number;
  author: string;
  description: string;
}
