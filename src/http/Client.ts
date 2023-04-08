import axios, { ResponseType } from "axios";

const APPLICATION_JSON = "application/json";
const client = axios.create({
  baseURL: "http://localhost:8082",
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
