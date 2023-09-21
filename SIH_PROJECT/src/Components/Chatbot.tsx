// src/components/Chatbot.tsx
import React, { useState } from "react";
import Modal from "react-modal";
import Message from "./Message";
import "./style/Chatbot.css";

Modal.setAppElement("#root");

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; isUserMessage?: boolean }[]
  >([]);
  const [inputText, setInputText] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    setMessages([...messages, { text: inputText, isUserMessage: true }]);
    setInputText("");
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div>
      <button className="chatbot-button" onClick={openModal}>
        Chat
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="chatbot-modal"
      >
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <Message
              key={index}
              text={message.text}
              isUserMessage={message.isUserMessage}
            />
          ))}
        </div>
        <div className="chatbot-input-container">
          <input
            className="chatbot-input"
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <button className="chatbot-send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Chatbot;