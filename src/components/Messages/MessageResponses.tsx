import React from "react";
import { Message } from "./Interfces";
import MessageItem from "./MessageItem";
import { useQuery } from "@tanstack/react-query";
import { getAllResponses } from "./Service";
import NoContent from "../NoContent/NoContent";
import SkeletonWrapper from "../SkeletonWrapper";
import MessagesSkeleton from "./MessagesSkeleton";

interface MessageResponsesProps {
  comment: Message;
}

const MessageResponses: React.FC<MessageResponsesProps> = (props) => {
  const { comment } = props;

  const { data, isLoading, error } = useQuery(["GET_ALL_RESPONSES_QUERY"], () =>
    getAllResponses(comment.id as string)
  );

  return (
    <div className="py-3 flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <MessageItem
          message={comment?.commentText!}
          userId={comment.userId}
          isUserVoted={comment.userVoted!}
          messageId={comment.id}
          date={comment.date}
          votes={comment.votes!}
          onClick={() => {}}
          showCommentsNumber={false}
          showEntireComment
        />

        <SkeletonWrapper isLoading={isLoading} skeleton={<MessagesSkeleton />}>
          <div className="mt-5  flex flex-col">
            <h1 className="text-lg mb-10 font-bold">
              {data?.length} respuestas
            </h1>
            {data?.length === 0 ? (
              <div className="mt-10">
                <NoContent message={`No tienes mensajes por ahora.`} />
              </div>
            ) : (
              data?.map((message) => {
                return (
                  <MessageItem
                    onClick={() => {}}
                    message={message.commentText as string}
                    userId={message.userId}
                    date={message.date}
                    votes={message.votes!}
                    messageId={message.id}
                    isUserVoted={message.userVoted!}
                    showCommentsNumber={false}
                    showEntireComment
                  />
                );
              })
            )}
          </div>
        </SkeletonWrapper>
      </div>
    </div>
  );
};

export default MessageResponses;
