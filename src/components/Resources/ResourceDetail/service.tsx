import { httpGetRequest } from "../../../http/Client";
import { Resource } from "./interfaces";

const GET_RESOURCE_BY_ID_URL = "/resource";

export const getResourceById = async (id: string): Promise<Resource> => {
  return (await httpGetRequest(GET_RESOURCE_BY_ID_URL + "/" + id, {})) ?? [];
};
