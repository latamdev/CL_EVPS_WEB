import { httpGetRequest } from "../../http/Client";
import { Resource } from "../Resources/ResourceDetail/interfaces";

const GET_ALL_VIDEOS_URL = "/video/all";
const GET_ALL_EBOOKS_URL = "resource/ebook/all";

export const getAllVideos = async (): Promise<any> => {
  return (await httpGetRequest(GET_ALL_VIDEOS_URL, {})) ?? [];
};

export const getAllEbooks = async (): Promise<any> => {
  return (await httpGetRequest(GET_ALL_EBOOKS_URL, {})) ?? [];
};
