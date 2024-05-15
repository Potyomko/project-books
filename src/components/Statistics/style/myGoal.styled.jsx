import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const ContainerMyGoal = styled.div`
    width: 275px;
    height: 318px;
    top: 110px;
    left: 966px;
`;

export const MyGoalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    
`;
export const GoalList = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
justify-content: center;
margin: 120px 0px;
padding: 0px;

`;

export const GoalItem = styled.li`
    
    display: flex;
    flex-direction: column;
    align-items: center;
justify-content: center;

`;
export const GoalTextDiv = styled.div`
    background: #B1B5C2;
    width: 100%
    
`;
export const GoalText = styled.h3`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
    color: #FFFFFF;
    text-align: center;
    white-space: nowrap;
    width: 100%

`;
export const GoalP = styled.p`
color: #091E3F;
text-align: center;
font-family: "Open Sans";
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 38px; 
`;
export const GoalTextPDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F7FA;
box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);
width: 66px;
height: 66px;
`;
export const GoalTextP = styled.p`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    text-align: center;
    color: #898F9F;
`;
export const MyGoalColor = styled.div`
    background: white;
    align-items: center;
`;

export const ExitBtn = styled(NavLink)`
background-color: #B1B5C2;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
border: 0px;
width: 230px;
height: 50px;
text-decoration: none;
margin-bottom: 20px;
padding-top: 10px;
`