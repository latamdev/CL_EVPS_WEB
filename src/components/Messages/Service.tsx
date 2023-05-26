import {
  httpGetRequest,
  httpPatchRequest,
  httpPostRequest,
} from "../../http/Client";
import { httpGetRequest as getUserClient } from "../../http/UserClient";
import { Message } from "./Interfces";

const COMMENT_URL = "/comments/add";
const RESOURCE_MESSAGES_URL = "/comments";
const USER_DATA_BY_ID = "/user/data/id";
const COMMENT_UPDATES_VOTES = "comments/update-votes";
const COMMENT_RESPONSES_URL = "comments/responses";

export const saveMessage = (messageForm: Message | undefined): Promise<any> => {
  return httpPostRequest(COMMENT_URL, messageForm);
};

export const getAllMessages = (
  criteria: string,
  resourceId: string,
  userId: string
): Promise<Array<Message>> => {
  const id = criteria === "user" ? userId : resourceId;

  console.log("resourceId de los mensajes", resourceId);

  return httpGetRequest(
    RESOURCE_MESSAGES_URL + "/" + id,
    {},
    { Authorization: "Bearer " + localStorage.getItem("token") }
  );
};

export const getUserInfo = async (userId: string): Promise<any> => {
  return await getUserClient(USER_DATA_BY_ID + "/" + userId, {});
};

export const updateCommentCount = async (
  commentId: string,
  userId?: string
): Promise<Message> => {
  return await httpPatchRequest(COMMENT_UPDATES_VOTES, {
    commentId,
    userId,
  });
};

export const getAllResponses = async (
  commentId: string
): Promise<Array<Message>> => {
  return await httpGetRequest(
    COMMENT_RESPONSES_URL + "/" + commentId,
    {},
    { Authorization: "Bearer " + localStorage.getItem("token") }
  );
};