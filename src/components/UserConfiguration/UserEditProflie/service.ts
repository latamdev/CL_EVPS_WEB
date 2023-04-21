import { httpPostRequest } from "../../../http/UserClient";

const UPDATE_URL = "/user/update-user";

export const updateUser = async (user: any): Promise<any> => {
  console.log(user);
  return httpPostRequest<any>(UPDATE_URL + "/" + user.id, user);
};
