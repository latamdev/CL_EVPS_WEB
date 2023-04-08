import { httpPostRequest } from "../../http/UserClient";
import { LoginParameters, LoginResponse } from "./interfaces";
import { MOCK_LOGIN_RESPONSE } from "./LoginStubs";

const LOGIN_URL = "/user/login";

export const doLogin = async (
  filters: LoginParameters
): Promise<LoginResponse> => {
  console.log(filters);
  return httpPostRequest<LoginResponse>(LOGIN_URL, filters);
  //return MOCK_LOGIN_RESPONSE;
};
