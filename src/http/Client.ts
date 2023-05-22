import axios, { ResponseType } from "axios";

const APPLICATION_JSON = "application/json";
const client = axios.create({
  baseURL: process.env.REACT_APP_VIDEO_SERVICE_URL,
});

export const httpGetRequest = async (
  url: string,
  params: {},
  headers: any = {}
) => {
  const response = await client.get(url, { params: params, headers: headers });

  return response.data;
};

export const httpPostRequest = async <T>(
  url: string,
  data: any,
  headers: any = { "Content-Type": APPLICATION_JSON },
  responseType?: ResponseType
): Promise<T> => {
  console.log(headers);
  return client
    .post(url, data, {
      responseType: (responseType as ResponseType) || "json",
      headers: headers,
    })
    .then(({ data }) => data);
};

export const httpPatchRequest = async <T>(
  url: string,
  params: any,
  headers: any = { "Content-Type": APPLICATION_JSON },
  responseType?: ResponseType
): Promise<T> => {
  console.log(headers);
  return client
    .patch(
      url,
      {},
      {
        responseType: (responseType as ResponseType) || "json",
        headers: headers,
        params: params,
      }
    )
    .then(({ data }) => {
      console.log({ data });
      return data;
    });
};
