import { httpGetRequest } from "../../http/Client";
import { VideoListResponse } from "../Videos/interfaces";

export const getAllResources = async (
  resourceType: string
): Promise<VideoListResponse> => {
  return await httpGetRequest(
    `/resource/${resourceType}/all`,
    {},
    { Authorization: "Bearer " + localStorage.getItem("token") }
  );
};
