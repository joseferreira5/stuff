import { useState, useEffect, useRef } from 'react';

import './datepicker.css';

export default function Datepicker() {
  const [date, setDate] = useState(new Date());
  const [focused, setFocused] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const inputEl = useRef(null);
  const containerEl = useRef(null);
  
  const onFocus = () => setFocused(true);

  useEffect(() => {
    const handleClickOutside = event => {
      if (!containerEl.current.contains(event.target)) {
        setFocused(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  });
  
  const changeDay = event => {
    event.preventDefault();

    const changeType = event.target.name;
    const newDate = new Date(date);
    
    if (changeType === 'incDay') {
      newDate.setDate(date.getDate() + 1);
    } else if (changeType === 'decDay') {
      newDate.setDate(date.getDate() - 1);
    }
  
    setDate(newDate);
    setHighlight(1);
  };

  const changeMonth = event => {
    event.preventDefault();

    const changeType = event.target.name;
    const newDate = new Date(date);

    if (changeType === 'incMonth') {
      newDate.setMonth(date.getMonth() + 1);
    } else if (changeType === 'decMonth') {
      newDate.setMonth(date.getMonth() - 1);
    }

    setDate(newDate);
    setHighlight(0);
  };

  const changeYear = event => {
    event.preventDefault();

    const changeType = event.target.name;
    const newDate = new Date(date);

    if (changeType === 'incYear') {
      newDate.setFullYear(date.getFullYear() + 1);
    } else if (changeType === 'decYear') {
      newDate.setFullYear(date.getFullYear() - 1);
    }

    setDate(newDate);
    setHighlight(2);
  };

  return (
    <div className="dob-container" ref={containerEl}>
      <div className="dob-input">
        <label className="datepicker-label">
          Date of birth
          <input readOnly value={date.toDateString().slice(3, 15)} ref={inputEl} onFocus={onFocus} />
        </label>
      </div>
      {focused === true &&
        <div className="datepicker-container" >
          <div className="datepicker-grid">
            <button className="datepicker-btn" name="incMonth" onClick={changeMonth}>^</button>
            <button className="datepicker-btn" name="incDay" onClick={changeDay}>^</button>
            <button className="datepicker-btn" name="incYear" onClick={changeYear}>^</button>
            {date.toDateString().slice(4, 15).split(' ').map((element, index) =>
              <div className={`date-text ${highlight === index && 'highlight'}`} key={index}>{element}</div>
            )}
            <button className="rotate datepicker-btn" name="decMonth" onClick={changeMonth}>^</button>
            <button className="rotate datepicker-btn" name="decDay" onClick={changeDay}>^</button>
            <button className="rotate datepicker-btn" name="decYear" onClick={changeYear}>^</button>
          </div>
        </div>
      }
    </div>
  );
}
