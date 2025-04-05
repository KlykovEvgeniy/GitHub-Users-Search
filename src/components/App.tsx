import { Container } from "./Container/Container";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

export const App = function () {
    return (
        <>
            <Container>
                <Header />
                <Main />
            </Container>
        </>
    )
}