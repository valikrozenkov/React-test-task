import { styled } from "@mui/material";
import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    isWithPadding?: boolean;
}

const Section: FC<Props> = ({ children, isWithPadding }) => {
    return (
        <Wrapper isWithPadding={isWithPadding}>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled('div')<{ isWithPadding?: boolean }>(({ isWithPadding }) => ({
    display: 'flex',
    padding: isWithPadding ? '90px 0' : '0 0 90px 0',
}));

export default Section;