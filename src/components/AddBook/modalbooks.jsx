
import { BiLike } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Btn, InputModal, ModalBox, ModalWindow } from "./Styled/ModalStyled.styled"




export const Modal = () => {
    const dispatch = useDispatch()




    // const style = {}
    return <ModalWindow>
        <ModalBox>
<h2>Обрати рейтинг книги</h2>
   <form action="">
    <label htmlFor="">
        <InputModal type="text" />
    </label>
   </form>
   <Btn >Назад</Btn>
    <Btn >Зберегти</Btn>
    </ModalBox>
    </ModalWindow>

}