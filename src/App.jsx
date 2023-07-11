import React from 'react';
import './App.css';


// App
export const formatTime = time => {
  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(Math.ceil(time - mins * 60)).padStart(2, "0");
  return { mins, secs };
};

export const TimeLeft = ({ timeLeft }) => {
  const { mins, secs } = formatTime(timeLeft);
  return <p className="timer__time">{`${mins}:${secs}`}</p>;
};
