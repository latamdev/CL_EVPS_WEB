import React, { useContext, useState } from "react";
import NoContent from "../NoContent/NoContent";
import { useQuery } from "@tanstack/react-query";
import { getAllMessages } from "./Service";
import MessageItem from "./MessageItem";
import { UserContext } from "../../Root";
import { Message } from "./Interfces";
import MessageResponses from "./MessageResponses";

interface MessagesProps {
  criteria: "resource" | "user";
  resourceId?: string;
}

const Messages: React.FC<MessagesProps> = (props) => {
  const { criteria, resourceId = "" } = props;
  const { currentUser } = useContext(UserContext);
  const [showCommentResponses, setshowCommentResponses] = useState(false);
  const [comment, setComment] = useState<Message>();

  const { data, isError } = useQuery({
    queryKey: ["GET_ALL_MESSAGES_QUERY", criteria],
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
  };

  return (
    <div className="w-full py-10 px-2 md:px-10">
      <div className="card">
        <h1 className="page-title text-2xl">
          {criteria === "resource"
            ? `Todas las preguntas de este recurso (${data?.length})`
            : "Tus preguntas"}
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

        {showCommentResponses && (
          <MessageResponses
            comment={comment!}
            setshowCommentResponses={setshowCommentResponses}
          />
        )}
      </div>
    </div>
  );
};

export default Messages;
