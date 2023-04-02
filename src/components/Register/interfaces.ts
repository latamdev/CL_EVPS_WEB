export interface RegisterParameters {
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  token: string;
  username: string;
}
