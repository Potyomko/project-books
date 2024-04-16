import { Container } from "components/GlobalStyle"
import { WantToRead } from "./adds/WantToRead"
import { TrainingFilter } from "./adds/TrainingFilter"
import { TrainingList } from "./adds/TrainingList"

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