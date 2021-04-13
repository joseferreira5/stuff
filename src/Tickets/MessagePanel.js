import { useState } from 'react';

import './styles/message-panel.css';

export default function MessagePanel({ ticket }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = event => {
    event.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage('');
  }

  const handleChange = event => {
    const userInput = event.target.value;

    setNewMessage(userInput);
  }

  console.log(messages);
  console.log(newMessage);

  return (
    ticket && (
    <section className="message-panel">
      <div className="upper-panel">
        <h2 className="ticket-title">{ticket.title}</h2>
        <div className="message-container">
          <div className="message-box">
            <span className="message-text">
              I'd like to {ticket.goal.toLowerCase()}.
            </span>
          </div>
          {messages.length > 0 && messages.map((message) => 
            <div className="message-box">
              <span className="message-text">
                {message}
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="conversation-box">
        <input 
          className="conversation-input" 
          type="text" 
          value={newMessage}
          placeholder="Type a message" 
          disabled={!ticket.updated} 
          onChange={handleChange}
        />
        <button 
          className={`send-message-btn ${!ticket.updated && 'hide'}`} 
          onClick={handleSendMessage}>
            Send
        </button>
      </div>
    </section>
  )
  )
}