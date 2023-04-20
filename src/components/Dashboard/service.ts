import { httpGetRequest } from "../../http/Client";
import { Resource } from "../Resources/ResourceDetail/interfaces";

const GET_ALL_USER_RESOURCES = "/resource/user";

export const getAllUserResources = async (
  userId: string
): Promise<Array<Resource>> => {
  return await httpGetRequest(
    GET_ALL_USER_RESOURCES + "/" + userId,
    {},
    { Authorization: "Bearer " + localStorage.getItem("token") }
  );
};
