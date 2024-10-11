import { styled, Typography } from "@mui/material";
import Container from "../../../components/Container/Container";
import Section from "../../../components/Section/section";

const ImpactsInNumber = () => {
    return (
        <Container>
            <Section isWithPadding={true}>
                <Wrapper>
                    <WrapperTitleText>
                        <TitleText>
                            See our impacts in number
                        </TitleText>
                    </WrapperTitleText>
                    <SubWrapper>
                        <StatWrapper>
                            <TextWrapper>
                                <Text>
                                    People
                                </Text>
                            </TextWrapper>
                            <CountWrapper>
                                <Count>
                                    200+
                                </Count>
                            </CountWrapper>
                        </StatWrapper>
                        <StatWrapper>
                            <TextWrapper>
                                <Text>
                                    Our users the world
                                </Text>
                            </TextWrapper>
                            <CountWrapper>
                                <Count>
                                    50K
                                </Count>
                            </CountWrapper>
                        </StatWrapper>
                        <StatWrapper>
                            <TextWrapper>
                                <Text>
                                    Succesfull projects
                                </Text>
                            </TextWrapper>
                            <CountWrapper>
                                <Count>
                                    100%
                                </Count>
                            </CountWrapper>
                        </StatWrapper>
                    </SubWrapper>
                </Wrapper>
            </Section>
        </Container>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: '50px'
});

const SubWrapper = styled('div')({
    display: 'flex',
    width: '100%',

});

const WrapperTitleText = styled('div')({
    display: 'flex',
    maxWidth: '708px',
    paddingBottom: '50'
});

const TitleText = styled(Typography)({
    fontSize: '52px',
    fontWeight: '600',
    lineHeight: '120%',
    letterSpacing: '-0.3px',
    color: '#22282B'
});

const StatWrapper = styled('div')({
    display: "flex",
    flexDirection: 'column',
    width: '100%',
    borderLeft: '1px solid #E6E9EA',
});

const TextWrapper = styled('div')({
    display: 'flex',
    width: '100%',
    borderLeft: '3px solid #22282B',
    paddingLeft: '20px'
});

const Text = styled(Typography)({
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '-0.2px',
    lineHeight: '140%',
    color: '#909DA2'
});

const CountWrapper = styled('div')({
    display: 'flex',
    width: '100%',
    position: 'relative',
    justifyContent: 'end',
    padding: '90px 0 0 0'

});

const Count = styled(Typography)({
    fontSize: '72px',
    fontWeight: '600',
    letterSpacing: '-0.3px',
    lineHeight: '120%',
    color: '#22282B',
    marginRight: '40px'
});

export default ImpactsInNumber;