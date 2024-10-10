import { styled, Typography } from "@mui/material";
import Container from "../../../components/Container/Container.tsx";
import Button from "../../../components/Button/Button.tsx";

const Browser = () => {
    return (
        <Container>
            <Wrapper>
                <TextWrapper>
                    <BrowserText>
                        Manage expenses directly from Chrome
                    </BrowserText>
                </TextWrapper>
                <Button>
                    Get in touch
                </Button>
                <BrowserImgWrapper>
                    <Image src="/images/Browser.png" />
                </BrowserImgWrapper>
            </Wrapper>
        </Container>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: '#F3F5F6',
    borderRadius: '30px',
    alignItems: 'center',
    gap: '36px',
    marginBottom: '90px'
});

const TextWrapper = styled('div')({
    display: 'flex',
    textAlign: 'center',
    maxWidth: '811px',
    paddingTop: '82px'
});

const BrowserText = styled(Typography)({
    fontSize: '72px',
    lineHeight: '120%',
    fontWeight: '600',
    letterSpacing: '-0.3px',
    color: '#22282B',
    textAlign: 'center',
});

const BrowserImgWrapper = styled('div')({
    display: 'flex',
    marginTop: '43px',
    justifyContent: 'center',
    maxWidth: '100%'
});

const Image = styled('img')({
    display: 'flex',
    maxWidth: '100%'
});

export default Browser;