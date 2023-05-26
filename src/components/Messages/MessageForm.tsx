import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { saveMessage } from "./Service";
import { Message } from "./Interfces";
import { UserContext } from "../../Root";

interface MessageFormProps {
  resourceId: string;
  isResponse?: boolean;
  commentFather?: Message;
}

const MessageForm: React.FC<MessageFormProps> = (props) => {
  const { resourceId, isResponse = false, commentFather } = props;
  const [message, setMessage] = useState<string>();
  const [showForm, setShowForm] = useState(false);
  const { currentUser } = useContext(UserContext);
  const queryClient = useQueryClient();

  console.log({ commentFather });

  const handleMessageForm = (event) => {
    event.preventDefault();
    const messageFormData = {
      videoId: isResponse ? "" : resourceId,
      userId: currentUser.id,
      fatherId: isResponse ? commentFather?.id : "",
      commentText: message,
      date: new Date().toISOString(),
      score: 0,
    } as Message;

    mutation.mutate(messageFormData);
  };

  useEffect(() => {
    setMessage("");
    setShowForm(false);
  }, [isResponse]);

  const mutation = useMutation({
    mutationKey: ["ADD_MESSAGE_QUERY"],
    mutationFn: saveMessage,
    onSuccess: (data) => {
      setMessage("");
      queryClient.refetchQueries();
    },
  });

  return (
    <div className="w-full px-2 lg:px-10 py-2">
      <div className="card">
        {showForm ? (
          <>
            {" "}
            <h1 className="text-xl font-extralight">
              {!isResponse ? "Deja una pregunta" : "Añadir respuesta"}
            </h1>
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
              <div className="flex justify-end gap-5 items-center">
                <span
                  onClick={() => setShowForm(false)}
                  className="text-primary text-xl hover:cursor-pointer hover:border-b-2 border-b-0 border-b-primary"
                >
                  Cancelar
                </span>
                <button className="py-2 px-10 hover:bg-secondary hover:text-black ease-linear transition-all duration-150  w-fit text-white bg-primary font-bold rounded-lg">
                  Enviar
                </button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <span
              onClick={() => setShowForm(true)}
              className="text-primary text-xl hover:cursor-pointer hover:border-b-2 border-b-0 border-b-primary"
            >
              {!isResponse ? "Hacer nueva pregunta" : "Añadir respuesta"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageForm;
