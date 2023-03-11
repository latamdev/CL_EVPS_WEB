export interface LoginParameters {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  verifiedAccount: boolean;
  token: string;
}
