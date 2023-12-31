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

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    // Create a new message and add it to the state
    const newUserMessage = { text: inputText, isUserMessage: true };
    setMessages([...messages, newUserMessage]);
    setInputText("");

    try {
      // Make a POST request to your API endpoint with the user's message
      const response = await fetch("http://localhost:3000/botResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      const responseData = await response.json();

      const botReplyMessage = {
        text: responseData.data,
        isUserMessage: false,
      };

      // Create a new array that includes both the previous messages and the new bot response
      setMessages((prevMessages) => [...prevMessages, botReplyMessage]);
    } catch (error) {
      console.error("Error sending/receiving messages:", error);
    }
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
