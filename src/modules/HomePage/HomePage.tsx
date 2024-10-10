import { styled } from "@mui/material";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Browser from "./components/Browser";
import TrialVersion from "./components/TrialVerison";
import ImpactsInNumber from "./components/ImpactsInNumber";

const HomePage = () => {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Browser />
                <TrialVersion />
                <ImpactsInNumber />
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

