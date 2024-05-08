import React from 'react';
import { useTimer } from 'react-timer-hook';
import {useSelector} from 'react-redux'
import { selectFinishDate } from '../../../redux/training/selectors';
import { useState } from 'react';
import { Modal } from './modal';
import { TimerBox, TimerTitle } from '../style/timer.styled';

export function TimeTofinish() {
  const timeOfTheFinish = useSelector(selectFinishDate)
  const time = new Date(timeOfTheFinish * 1000)
  const[ modalTreaker, setModalTreaker] = useState(false)

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: time, onExpire: () =>{ 
    //  setModalTreaker(true) 
    }});


  return (
    <>
     {modalTreaker && <Modal/>}
    <div >
      <TimerTitle>До досягнення мети залишилось</TimerTitle>
      <TimerBox>

        <ul>
          <li> <span>{days < 10 ? 0 : ''}{days}</span> <p>ДН</p></li>
          <li><span>: {hours < 10 ? 0 : ''}{hours}</span><p>ГОД</p></li>
          <li> <span>: {minutes < 10 ? 0 : ''}{minutes}</span><p>ХВ</p></li>
          <li> <span>: {seconds < 10 ? 0 : ''}{seconds}</span><p>СЕК</p></li>
        </ul>     
      </TimerBox>
    </div>
    </>
  );
}