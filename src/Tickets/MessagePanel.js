import { useState } from 'react';

import './styles/message-panel.css';

export default function MessagePanel({ ticket }) {
  const [messages, setMessages] = useState([]);

  return (
    ticket && (
    <section className="message-panel">
      <h2>{ticket.title}</h2>
      <div className="message-container">
        <span className="message-text">I'd like to {ticket.goal.toLowerCase()}.</span>
      </div>
    </section>
  )
  )
}