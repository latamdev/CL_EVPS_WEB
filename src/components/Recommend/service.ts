import { httpGetRequest } from "../../http/Client";
import { Resource } from "../Resources/ResourceDetail/interfaces";

const GET_RECOMMENDS_BY_ID_URL = "/resource/recommends";

export const getRecommendsById = async (
  id: string
): Promise<Array<Resource>> => {
  return (
    (await httpGetRequest(
      GET_RECOMMENDS_BY_ID_URL + "/" + id,
      {},
      { Authorization: localStorage.getItem("token") }
    )) ?? []
  );
};
