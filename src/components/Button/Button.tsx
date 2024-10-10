import { styled, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    id?: string;
}

const Button: FC<Props> = ({ children, style, id }) => {
    return (
        <ButtonWrapper style={style} id={id}>
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled('div')({
    display: 'flex',
    borderRadius: '11px',
    padding: '18px 45px',
    backgroundColor: '#5B40FF',
});

const ButtonText = styled(Typography)({
    fontSize: '18px',
    lineHeight: '120%',
    letterSpacing: '-0.2px',
    fontWeight: '600',
    color: 'white',
});

export default Button;