import React, { useState } from 'react';
import './BrokkeBoxen.css';

const BrokkeBoxen = () => {
  const [brok, setBrok] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brok.trim() === '') {
      setMessage('Du skal skrive noget brok først!');
    } else {
      setMessage('Tak for din brok! Vi arbejder på en løsning.');
      setBrok('');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/box-icon.png" alt="Box Icon" className="icon" />
        <span className="emoji">😤 sStøøøn</span>
        <h1>Velkommen til Brokke Boxen</h1>
        <p>...hvor vi omsætter dit brok til løsninger.</p>
        <p className="anon">Dit brok er anonymt</p>
      </div>

      <form onSubmit={handleSubmit} className="brok-form">
        <label htmlFor="brok">Indtast din brok her:</label>
        <textarea
          id="brok"
          value={brok}
          onChange={(e) => setBrok(e.target.value)}
          rows="5"
          required
        />
        <button type="submit">Send</button>
      </form>

      {message && <p className="response">{message}</p>}
    </div>
  );
};

export default BrokkeBoxen;
