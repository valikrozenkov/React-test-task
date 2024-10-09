import { styled } from "@mui/material";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

const HomePage = () => {
    return (
        <Wrapper>
            <Container>
                <Header />
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
});

export default HomePage;

