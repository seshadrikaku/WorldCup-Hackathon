import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const endDate = new Date(2023, 9, 5);
    const interval = setInterval(() => {
      const today = new Date();
      const remain = endDate.getTime() - today.getTime();
    
      const sec = 1000;
      const min = 60 * sec;
      const hour = 60 * min;
      const day = 24 * hour;

      if (endDate < today) {
        clearInterval(interval);
        setTimeRemaining('00d 00h 00m 00s');
      } else {
        const days = Math.floor(remain / day);
        const hours = Math.floor((remain % day) / hour);
        const minutes = Math.floor((remain % hour) / min);
        const seconds = Math.floor((remain % min) / sec);

        const formattedTime = `${days}:Days  ${hours}:Hours  ${minutes}:Minutes ${seconds}:Seconds`;
        setTimeRemaining(formattedTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="timer">{timeRemaining}</div>;
};

export default CountdownTimer;
