import { httpGetRequest, httpPostRequest } from "../../../http/Client";

const UPLOAD_URL = "resource/upload";
const ALL_TAGS_URL = "tag/all";

export const doUploadResource = async (formData: any): Promise<any> => {
  return httpPostRequest(UPLOAD_URL, formData, {
    "Content-Type": "multipart/form-data",
  });
};

export const getAllTags = async (): Promise<any> => {
  return httpGetRequest(ALL_TAGS_URL, {});
};
