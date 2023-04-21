import { httpGetRequest } from "../../http/Client";
import { Resource } from "../Resources/ResourceDetail/interfaces";

export const getResource = async (resourceId: string): Promise<Resource> => {
  return await httpGetRequest(
    `resource/${resourceId}`,
    {},
    { Authorization: "Bearer " + localStorage.getItem("token") }
  );
};
