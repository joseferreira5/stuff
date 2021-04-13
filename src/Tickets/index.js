import { useState } from 'react';

import ClassifyPanel from './ClassifyPanel';
import MessagePanel from './MessagePanel';

import { tickets as data } from '../data';
import './styles/ticket-page.css';

export default function Tickets() {
  const [tickets, setTickets] = useState(data);
  const [ticketIndex, setTicketIndex] = useState(0);
  const currentTicket = tickets[ticketIndex];

  const handleTicketChange = index => {
    const ticket = tickets[index];
    
    setTicketIndex(index);
    setTickets([
      ...tickets.slice(0, index),
      {
        ...ticket,
        status: 'Read',
      },
      ...tickets.slice(index + 1),
    ]);
  };
  
  const handleUpdate = data => {
    const index = tickets.findIndex((ticket) => ticket._id === data._id);
    const ticket = tickets[index];

    setTickets([
      ...tickets.slice(0, index),
      {
        ...ticket,
        title: data.title,
        goal: data.goal,
        updated: true,
      },
      ...tickets.slice(index + 1),
    ]);
  };

  return (
    <main className="ticket-page">
      <section className="nav-panel">
        <button className="user-icon">User</button>
        {tickets.map((ticket, index) => 
          <div className="ticket-btn-container" key={ticket._id}>
            <button 
              className={`ticket-btn ${currentTicket._id === ticket._id ? 'selected' : ''}`}
              onClick={() => handleTicketChange(index)}
            >
              {getInitials(ticket.assignee)}
            </button>
            <div className={`status ${ticket.status}`} />
          </div>
        )}
      </section>
      <ClassifyPanel ticket={currentTicket} updateTicket={handleUpdate} />
      <MessagePanel ticket={currentTicket} />
    </main>
  );
};

const getInitials = fullName => {
  return fullName.split(' ').map((name) => name[0]).join('');
};