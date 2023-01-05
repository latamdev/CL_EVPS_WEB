import axios from "axios";

const APPLICATION_JSON = "application/json";
const client = axios.create({
  baseURL: "",
});

export const httpGetRequest = async (
  url: string,
  params: string,
  headers: any = {}
) => {
  const response = await client.get(url, { params: params, headers: headers });

  return response.data;
};

export const httpPostRequest = async (url: string, data: any) => {
  client
    .post(url, data, { headers: { "Content-Type": APPLICATION_JSON } })
    .then(({ data }) => data);
};
