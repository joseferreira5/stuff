import { useState } from 'react';

import './styles/classify-panel.css';

export default function ClassifyPanel({ updateTicket }) {
  const [charCount, setCharCount] = useState(25);
  const [taskName, setTaskName] = useState('');
  const [goal, setGoal] = useState('');

  const handleTitleChange = event => {
    const newTaskName = event.target.value;
  
    if (newTaskName.length > taskName.length) {
      setCharCount(charCount - 1);
    } else if (newTaskName.length < taskName.length) {
      setCharCount(charCount + 1);
    }

    setTaskName(newTaskName);
  }

  const handleGoalChange = event => {
    const newGoal = event.target.value;

    setGoal(newGoal);
  }

  const handleSubmit = event =>{
    event.preventDefault();

    const data = {
      title: taskName,
      goal: goal
    };

    updateTicket(data);
  }

  return (
    <section className="classify-panel">
      <h2 className="classify-heading">Classify</h2>
      <form className="classify-form" onSubmit={handleSubmit}>
        <label className="classify-goal">
          What's the user asking for?
          <select className="classify-select" value={goal} onChange={handleGoalChange}>
            <option value="none">Select</option>
            <option value="Buy a product">Buy a product</option>
            <option value="Cancel an account">Cancel an account</option>
            <option value="Buy and Recommend a gift">Buy and Recommend a gift</option>
            <option value="Ask for the business">Ask for the business</option>
          </select>
        </label>
        <label className="classify-title">
          Task name (as shown to the user)
          <input type="text" value={taskName} onChange={handleTitleChange}/>
        </label>
        <span className={`character-count-text ${charCount < 0 && 'exceeded'}`}>(Characters left: {charCount})</span>
      </form>
      <button className="proceed-btn" disabled={charCount < 0} onClick={handleSubmit}>Proceed</button>
    </section>
  )
}