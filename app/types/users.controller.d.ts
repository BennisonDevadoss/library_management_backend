export interface AddUserParams {
  name: string;
  email: string;
  role_id: number;
  mobile_no?: string;
}

export interface UserListQueryParams {
  q?: string;
  name?: string;
  role?: string;
  page?: number;
  email?: string;
  per_page?: number;
  mobile_no?: string;
}
