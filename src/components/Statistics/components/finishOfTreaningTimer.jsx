import React from 'react';
import { useTimer } from 'react-timer-hook';
import {useSelector} from 'react-redux'

export function TimeTofinish() {
  const timeOfTheFinish = useSelector(state => state.traning.finishDate)
  const time = new Date(timeOfTheFinish * 1000)

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: time, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <p>До досягнення мети залишилось</p>
      <div style={{fontSize: '50px'}}>
            <span>{days < 10 ? 0 : ''}{days}</span>
            :<span>{hours < 10 ? 0 : ''}{hours}</span>
            :<span>{minutes < 10 ? 0 : ''}{minutes}</span>
            :<span>{seconds < 10 ? 0 : ''}{seconds}</span>
      </div>
    </div>
  );
}