import Container from "../Container/Container";
import { styled, Typography } from "@mui/material";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstaIcon } from "../Icons/InstaIcon";

const Header = () => {
    return (
        <Wrapper>
            <Info>
                <PageText>
                    About
                </PageText>
                <PageText>
                    Pricing
                </PageText>
                <PageText>
                    Contacts
                </PageText>
            </Info>
            <Logo src="/images/Logo.png" />
            <Credentials>
                <TwitterIcon />
                <FacebookIcon />
                <InstaIcon />
            </Credentials>
        </Wrapper>
    );
};

const Wrapper = styled('div')({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '37px 0px',
    alignItems: 'center'
});

const Info = styled('div')({
    display: 'flex',
    gap: '40px'
});

const PageText = styled(Typography)({
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '-0.2px',
    lineHeight: '140%',
    color: '#22282B',
});

const Logo = styled('img')({
    cursor: 'pointer',
    width: '127px',
    height: '20px'
});

const Credentials = styled('div')({
    display: 'flex',
    gap: '35px',
    alignItems: 'center',
});

export default Header;