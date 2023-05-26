import React, { useContext, useEffect, useState } from "react";
import NoContent from "../NoContent/NoContent";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllMessages } from "./Service";
import MessageItem from "./MessageItem";
import { UserContext } from "../../Root";
import { Message } from "./Interfces";
import MessageResponses from "./MessageResponses";
import SkeletonWrapper from "../SkeletonWrapper";
import MessagesSkeleton from "./MessagesSkeleton";

interface MessagesProps {
  criteria: "resource" | "user";
  resourceId?: string;
  isResponse?: (isResponse: boolean) => void;
  setFatherComment?: (message: Message) => void;
}

const Messages: React.FC<MessagesProps> = (props) => {
  const {
    criteria,
    resourceId = "",
    isResponse = () => {},
    setFatherComment = (message: Message) => {},
  } = props;
  const { currentUser } = useContext(UserContext);
  const [showCommentResponses, setshowCommentResponses] = useState(false);
  const [comment, setComment] = useState<Message>();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["GET_ALL_MESSAGES_QUERY", criteria, resourceId],
    queryFn: () => getAllMessages(criteria, resourceId, currentUser.id),
    select(data) {
      return data.sort((m1: Message, m2: Message) => {
        return m1.votes! > m2.votes! ? -1 : m1.votes! < m2.votes! ? 1 : 0;
      });
    },
  });

  const commentResponses = (commentId: string) => {
    setComment(
      data?.find((message: Message) => {
        return message.id === commentId;
      })
    );
    setshowCommentResponses(true);
    isResponse(true);
    setFatherComment(comment as Message);
  };

  const renderMessageTitle = () => {
    if (!showCommentResponses) {
      return <p>{`Todas las preguntas de este recurso (${data?.length})`}</p>;
    }

    return (
      <button
        className="text-base bg-primary w-fit p-2 font-bold text-white rounded-lg hover:text-black hover:bg-secondary ease-linear transition-all duration-150 "
        onClick={() => {
          isResponse(false);
          setshowCommentResponses(false);
        }}
      >
        &#60; Volver a todas las preguntas
      </button>
    );
  };

  return (
    <div className="w-full py-4 px-2 md:px-10">
      <SkeletonWrapper isLoading={isLoading} skeleton={<MessagesSkeleton />}>
        <div className="card">
          <h1 className="page-title text-2xl">
            {criteria === "resource" ? renderMessageTitle() : "Tus preguntas"}
          </h1>

          {data?.length === 0 ? (
            <div className="mt-10">
              <NoContent message={`No tienes mensajes por ahora.`} />
            </div>
          ) : (
            !showCommentResponses &&
            data?.map((message) => {
              return (
                <MessageItem
                  onClick={commentResponses}
                  message={message.commentText as string}
                  userId={message.userId}
                  date={message.date}
                  votes={message.votes!}
                  messageId={message.id}
                  isUserVoted={message.userVoted!}
                />
              );
            })
          )}

          {showCommentResponses && <MessageResponses comment={comment!} />}
        </div>
      </SkeletonWrapper>
    </div>
  );
};

export default Messages;
