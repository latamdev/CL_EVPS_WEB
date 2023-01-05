import { httpPostRequest } from "../../http/Client";
import { LoginParameters, LoginResponse } from "./interfaces";

const LOGIN_URL = "/login";

export const doLogin = async (
  filters: LoginParameters
): Promise<LoginResponse> => {
  return httpPostRequest<LoginResponse>(LOGIN_URL, filters);
};
