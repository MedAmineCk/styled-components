import React from "react";
import styled from "styled-components";
const Button = (props) => {
  const { text, primary } = props;
  const StyledButton = styled.button`
    background-color: ${({ primary }) => (primary ? "red" : "green")};
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
  `;
  return <StyledButton primary={primary}>{text}</StyledButton>;
};

export default Button;
