import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)`
    color: white;
    background: transparent;
    border: 1px solid white;
    &:hover {
        color: black;
        background: white;
    }
`;

const TransparentButton: React.FC<ButtonProps> = (props) => {
    return <StyledButton size="large" disableElevation {...props} />;
};

export default TransparentButton;
