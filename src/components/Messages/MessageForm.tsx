import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { saveMessage } from "./Service";
import { Message } from "./Interfces";
import { UserContext } from "../../Root";

interface MessageFormProps {
  resourceId: string;
}

const MessageForm: React.FC<MessageFormProps> = (props) => {
  const { resourceId } = props;
  const [message, setMessage] = useState<string>();
  const { currentUser } = useContext(UserContext);
  const queryClient = useQueryClient();

  const handleMessageForm = (event) => {
    event.preventDefault();
    const messageFormData = {
      videoId: resourceId,
      userId: currentUser.id,
      commentText: message,
      date: new Date().toISOString(),
      score: 0,
    } as Message;

    mutation.mutate(messageFormData);
  };

  const mutation = useMutation({
    mutationKey: ["ADD_MESSAGE_QUERY"],
    mutationFn: saveMessage,
    onSuccess: (data) => {
      setMessage("");
      queryClient.refetchQueries();
    },
    onError: (error) => console.log(error),
  });

  return (
    <div className="w-full px-2 lg:px-10 py-2">
      <div className="card">
        <h1 className="text-xl font-extralight">Deja una pregunta</h1>
        <form onSubmit={(e) => handleMessageForm(e)} className="mt-5">
          <textarea
            name="question"
            className="form-input w-full px-4 py-3 rounded-lg focus:border-primary"
            id=""
            cols={30}
            rows={2}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <button className="py-2 px-10 hover:bg-secondary hover:text-black ease-linear transition-all duration-150  w-fit text-white bg-primary font-bold rounded-lg">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
