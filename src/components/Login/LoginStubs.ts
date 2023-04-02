import { LoginResponse } from "./interfaces";

export const MOCK_LOGIN_REQUEST = {
  email: "email20@gmail.com",
  password: "secret",
};

export const MOCK_LOGIN_RESPONSE: LoginResponse = {
  id: "63b6f2d3e13cec6807568edc",
  username: "Jhon Doe",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxMjM0NTY3ODkwIiwiZmlyc3RfbmFtZSI6IkpvaG4iLCJsYXN0X25hbWUiOiJEb2UiLCJlbWFpbCI6Impob24uZG9lQGVtYWlsLmNvbSIsImlzQWRtaW4iOnRydWV9.S1gBahWGBMu381VC5H_Q5eRPzu8cpZL7JoOxSGYYCN4",
  verifiedAccount: true,
};
