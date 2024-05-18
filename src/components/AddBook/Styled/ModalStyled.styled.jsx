import styled from 'styled-components'
import { NavLink } from "react-router-dom"

export const ModalWindow = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
align-items: center;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);`

    export const ModalBox = styled.div`
 width: 570px;
height: 408px;


    background: #FFF;
box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.20);
display: flex;
flex-direction: column;

padding: 0px 47px;


`

export const Btn = styled(NavLink)`
background-color: #FF6B08;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 38px; 
border: 0px;
width: 230px;
height: 40px;
text-decoration: none;
`

export const InputModal = styled.input`
width: 510px;
height: 174px;
border: 1px solid #A6ABB9;



`