import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { andOfTraining } from "../../../redux/training/operation"
import { selectTrainingId } from "../../../redux/training/selectors"
import { ModalWindow, ModalBox } from "../style/modal.styled"

export const Modal = () => {
    const dispatch = useDispatch()
    const trId = useSelector(selectTrainingId);

    const handlerOnClick = () => {
        dispatch(andOfTraining(trId))
    }
    return <ModalWindow>
        <ModalBox>
    <p>Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)</p>
    <NavLink to='/training' onClick={handlerOnClick}>Ok</NavLink>
    </ModalBox>
    </ModalWindow>

}