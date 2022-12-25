import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
const Content = () => {
  const fadIn = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
  `;
  const Title = styled.h1`
    color: #aaecf0;
    animation: 3s ${fadIn} ease-out infinite;
  `;
  const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
  `;
  return (
    <Section>
      <Title>💅🏻 Section</Title>
      <Button primary text="me first" />
      <Button text="me second" />
    </Section>
  );
};

export default Content;
