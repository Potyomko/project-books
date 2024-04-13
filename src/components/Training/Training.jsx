import { Container } from "components/GlobalStyle"
import { WantToRead } from "./WantToRead"
import { TrainingFilter } from "./TrainingFilter"
import { TrainingList } from "./TrainingList"

export const Training = ()=>{
    return (
        <Container>
            <div>
                <h1>Моє Тренування</h1>
                <TrainingFilter />
                <TrainingList />
                <button>Почати тренування</button>
            </div>
            <div>
                <WantToRead/>
            </div>
        </Container>
    )
}