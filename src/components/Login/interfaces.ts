export interface LoginParameters {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  verifiedAccount: boolean;
  token: string;
}
