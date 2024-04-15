import React from 'react';
import { useTimer } from 'react-timer-hook';
// import {useSelector} from 'react-redux'

export function NewYearTimer() {
    const currentYear = new Date().getFullYear();
    const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: nextYear, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <p>До закінчення року залишилосьo</p>
      <div style={{fontSize: '50px'}}>
        <span>{days < 10 ? 0 : ''}{days}</span>
        :<span>{hours < 10 ? 0 : ''}{hours}</span>
        :<span>{minutes < 10 ? 0 : ''}{minutes}</span>
        :<span>{seconds < 10 ? 0 : ''}{seconds}</span>
      </div>
    </div>
  );
}