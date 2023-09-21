import React from "react";
import "./style/Message.css";

interface MessageProps {
  text: string;
  isUserMessage?: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUserMessage }) => {
  return (
    <div
      className={`message ${isUserMessage ? "user-message" : "bot-message"}`}
    >
      {text}
    </div>
  );
};

export default Message;