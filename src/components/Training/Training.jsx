import { Container } from "components/GlobalStyle"
import { WantToRead } from "./adds/WantToRead"
import { TrainingFilter } from "./adds/TrainingFilter"

export const Training = ()=>{
    return (
        <Container>
            <div>
                <h1>Моє Тренування</h1>
                <TrainingFilter />
                <button>Почати тренування</button>
            </div>
            <div>
                <WantToRead/>
            </div>
        </Container>
    )
}