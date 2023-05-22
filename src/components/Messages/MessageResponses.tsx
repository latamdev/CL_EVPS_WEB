import React from "react";
import { Message } from "./Interfces";
import MessageItem from "./MessageItem";

interface MessageResponsesProps {
  setshowCommentResponses: (showCommentResponses: boolean) => void;
  comment: Message;
}

const MessageResponses: React.FC<MessageResponsesProps> = (props) => {
  const { setshowCommentResponses, comment } = props;
  return (
    <div className="py-3 flex flex-col gap-3">
      <button
        className="bg-primary w-fit p-2 font-bold text-white rounded-lg hover:text-black hover:bg-secondary ease-linear transition-all duration-150 "
        onClick={() => setshowCommentResponses(false)}
      >
        &#60; Volver a todas las preguntas
      </button>

      <div className="flex flex-col gap-2">
        <MessageItem
          message={comment?.commentText!}
          userId={comment.userId}
          isUserVoted={comment.userVoted!}
          date={comment.date}
          votes={comment.votes!}
          onClick={() => {}}
          showCommentsNumber={false}
        />
      </div>
    </div>
  );
};

export default MessageResponses;
