import { useState } from 'react';

import ClassifyPanel from './ClassifyPanel';
import MessagePanel from './MessagePanel';

import { tickets } from '../data';
import './styles/ticket-page.css';

export default function Tickets() {
  const [currentTicket, setCurrentTicket] = useState(tickets[0]);

  const handleTicketChange = ticket => {
    setCurrentTicket({
      ...ticket,
      status: 'Read',
    });
  };
  
  const handleUpdate = data => {
    setCurrentTicket({
      ...currentTicket,
      title: data.title,
      goal: data.goal,
      updated: true,
    });
  };

  return (
    <main className="ticket-page">
      <section className="nav-panel">
        <button className="user-icon">User</button>
        {tickets.map((ticket) => 
          <div className="ticket-btn-container" key={ticket._id}>
            <button 
              className={`ticket-btn ${currentTicket._id === ticket._id ? 'selected' : ''}`}
              onClick={() => handleTicketChange(ticket)
            }>
              {ticket.assignee}
            </button>
            <div className={`status ${currentTicket._id === ticket._id ? 'Read' : ticket.status}`}/>
          </div>
        )}
      </section>
      <ClassifyPanel ticket={currentTicket} updateTicket={handleUpdate} />
      <MessagePanel ticket={currentTicket} />
    </main>
  );
}