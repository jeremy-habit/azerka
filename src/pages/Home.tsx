import React, { ReactElement } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Home(): ReactElement {
  return (
    <div>
      <Title>GROS TITLE</Title>
      <h2>Home</h2>
    </div>
  );
}
