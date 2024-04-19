import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface messages {
  status: number;
  message: string;
  date: string;
}

interface props {
  message: messages | null;
}

function Alert({ message }: props) {
  const [messages, setMessages] = useState<messages[]>([]);

  const handleTimeOut = (message: messages) => {
    setTimeout(() => {
      setMessages((oldMessages) =>
        oldMessages.filter((messages) => messages !== message)
      );
    }, 6000);
  };

  useEffect(() => {
    if (!message) {
      return;
    }

    setMessages((oldMessages) => [...oldMessages, message]);
    handleTimeOut(message);
  }, [message]);

  return (
    <div className="fixed top-10 right-5 z-20 grid gap-4">
      {messages.map((message, index) => (
        <div
          className={`shadow-md rounded-md overflow-hidden ${
            message.status === 200 ? "bg-green-500" : "bg-red-500"
          }`}
          key={index}
        >
          <div className="py-2 px-4 flex gap-4 items-center">
            <p className="capitalize tracking-wide text-lg grow text-slate-100">
              {message.message}
            </p>
            <span className="h-[70%] block w-[2px] bg-white/35"></span>
            <button
              onClick={() => {
                setMessages((oldMessages) =>
                  oldMessages.filter((messages) => messages !== message)
                );
              }}
            >
              <IoIosCloseCircleOutline size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Alert;
