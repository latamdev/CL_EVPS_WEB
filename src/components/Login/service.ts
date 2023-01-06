import { httpPostRequest } from "../../http/Client";
import { LoginParameters, LoginResponse } from "./interfaces";
import { MOCK_LOGIN_RESPONSE } from "./LoginStubs";

const LOGIN_URL = "/login";

export const doLogin = async (
  filters: LoginParameters
): Promise<LoginResponse> => {
  //httpPostRequest<LoginResponse>(LOGIN_URL, filters);
  return MOCK_LOGIN_RESPONSE;
};
