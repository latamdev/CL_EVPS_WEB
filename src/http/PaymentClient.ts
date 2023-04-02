import axios from "axios";

const APPLICATION_JSON = "application/json";

const client = axios.create({
  baseURL: "http://localhost:8081",
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
  contentType: string = APPLICATION_JSON
): Promise<T> => {
  return client
    .post(url, data, {
      headers: {
        "Content-Type": contentType,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(({ data }) => data);
};
