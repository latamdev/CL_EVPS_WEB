import { httpPostRequest } from "../../http/UserClient";
import { RegisterParameters, RegisterResponse } from "./interfaces";

const LOGIN_URL = "/user/signup";

export const doRegister = async (
  filters: RegisterParameters
): Promise<RegisterResponse> => {
  return httpPostRequest<RegisterResponse>(LOGIN_URL, filters);
  //return MOCK_LOGIN_RESPONSE;
};
