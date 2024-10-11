import { styled, Typography } from "@mui/material";
import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import Section from "../../../components/Section/section.tsx";

const TrialVersion = () => {
    return (
        <Container>
            <Section isWithPadding={true}>
                <Wrapper>
                    <SubWrapper>
                        <TitleText>
                            Ac cras eu, nisl dui pulvinar malesuada est eget quam vitae ciras fames fermentum
                        </TitleText>
                    </SubWrapper>
                    <TextWrapper>
                        <InfoWrapper>
                            <TextSubWrapper>
                                <Text>
                                    Ac cras eu, nisl dui pulvinar malesuada fermentum est eget quam vitae cras fames fermentum
                                </Text>
                            </TextSubWrapper>
                            <TextSubWrapper>
                                <Text>
                                    Ac cras eu, nisl dui pulvinar malesuada fermentum est eget quam vitae cras fames fermentum
                                </Text>
                            </TextSubWrapper>
                        </InfoWrapper>
                        <ButtonWrapper>
                            <Button>
                                Try it for free
                            </Button>
                        </ButtonWrapper>
                    </TextWrapper>
                </Wrapper>
            </Section>
        </Container>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '70px',
});

const SubWrapper = styled('div')({
    display: 'flex',
    width: '100%',
    maxWidth: '860px'
});

const TitleText = styled(Typography)({
    fontSize: '52px',
    fontWeight: '600',
    lineHeight: '120%',
    letterSpacing: '-0.3px',
    color: '#22282B',
});

const TextWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});

const InfoWrapper = styled('div')({
    display: 'flex',
    gap: '40px',
});

const TextSubWrapper = styled('div')({
    display: 'flex',
    maxWidth: '360px',
});

const Text = styled(Typography)({
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '140%',
    letterSpacing: '-0.2px',
    color: '#909DA2',
});

const ButtonWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column'
});

export default TrialVersion;