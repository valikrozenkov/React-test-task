import React, { FC } from "react";
import { styled } from "@mui/material";

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    id?: string;
}

const Container: FC<Props> = ({ children, style, id }) => {
    return (
        <Wrapper style={style} id={id}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1160px',
    background: 'white',
    justifyContent: 'center',
});

export default Container;