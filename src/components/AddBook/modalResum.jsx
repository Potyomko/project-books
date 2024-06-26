import React from 'react';
import { BtnClose, BtnCloseResum, ContainerBTN, ItemResume, ListStar, ModalBox, ModalWindow } from './Styled/ModalStyled.styled';
import { useSelector } from 'react-redux';

export const ModalResum = ({ bookId, onClose }) => {
    const books = useSelector(state => state.books.booksBD);
    const book = books.find(book => book.id === bookId);
    const stars = Array(5).fill(false).map((_, index) => index < book?.resum?.rating)
  
    return (
      <ModalWindow>
        <ModalBox>
            <h2>Рейтинг</h2>
          <ListStar>
            {stars.map((isFilled, index) => (
              <li key={index}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill={isFilled ? '#FF6B08' : 'none'} xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z" stroke='#FF6B08'  />
                </svg>
              </li>
            ))}
          </ListStar>
          <h2>Резюме</h2>
          <p style={{maxWidth: "70%",  overflowWeap: "break-word"}}>{book?.resum?.resume || 'Резюме відсутнє'}</p>
          <ContainerBTN>
            <BtnCloseResum onClick={onClose}>Назад</BtnCloseResum>
          </ContainerBTN>
        </ModalBox>
      </ModalWindow>
    );
  };