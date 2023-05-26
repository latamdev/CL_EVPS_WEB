import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { getAllResponses, getUserInfo, updateCommentCount } from "./Service";
import { IMG_USER_URL } from "../UserConfiguration/constants";
import { FaComments, FaRegThumbsUp } from "react-icons/fa";
import { UserContext } from "../../Root";

interface MessageItemProps {
  messageId?: string;
  message: string;
  userId: string;
  date: string;
  votes: number;
  isUserVoted: boolean;
  showCommentsNumber?: boolean;
  showEntireComment?: boolean;
  onClick: (messageId: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const {
    message,
    date,
    userId,
    votes = 0,
    messageId,
    isUserVoted = false,
    onClick,
    showCommentsNumber = true,
    showEntireComment = false,
  } = props;
  const [commentVotes, setCommentVotes] = useState(votes);
  const [userVoted, setUserVoted] = useState(isUserVoted);
  const { currentUser } = useContext(UserContext);

  const { data } = useQuery(["GET_USER_INFO_QUERY", userId], () =>
    getUserInfo(userId)
  );

  const {
    data: dataMessage,
    isLoading,
    error,
  } = useQuery(["GET_ALL_RESPONSES_QUERY", messageId], () =>
    getAllResponses(messageId as string)
  );

  console.log("commment id : " + messageId + " count : " + dataMessage?.length);

  const updateMessageVotes = () => {
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationKey: ["UPDATE_MESSAGE_VOTES", messageId],
    mutationFn: () => updateCommentCount(messageId!, currentUser.id),
    onSuccess(data, variables, context) {
      setCommentVotes(data.votes!);
      setUserVoted(!userVoted);
    },
  });

  return (
    <div className="px-3 py-2 flex flex-row gap-5 border-b">
      <div className="flex items-center">
        <img
          src={`${IMG_USER_URL}/${data?.avatar}`}
          className="rounded-full w-16"
          alt="user_avatar"
        />
      </div>
      <div
        className={
          `flex flex-col gap-5 flex-1 ` + (!showEntireComment ? "truncate" : "")
        }
      >
        <p className="font-bold">
          {data?.username}{" "}
          <span className="font-light text-sm">
            ({data?.firstName + " " + data?.lastName})
          </span>
          <p className="text-xs font-light">
            {new Date(date).toLocaleString().split(",")[0]}
          </p>
        </p>
        <p
          className={
            !showEntireComment ? `text-ellipsis overflow-hidden ...` : ""
          }
        >
          {message}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="flex flex-row gap-2 items-center text-lg">
          <span>{commentVotes}</span>
          <FaRegThumbsUp
            onClick={() => updateMessageVotes()}
            className={`${
              userVoted ? "text-blue-500" : ""
            } hover:text-blue-500 hover:cursor-pointer`}
          />
        </span>
        {showCommentsNumber && (
          <span className="flex flex-row gap-2 items-center text-lg">
            <span>{dataMessage?.length}</span>
            <FaComments
              onClick={() => onClick(messageId!)}
              className="hover:text-danger hover:cursor-pointer"
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
