import styled from "styled-components";

export default function Home() {

    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    return (
        <div>
            <Title>GROS TITLE</Title>
          <h2>Home</h2>
        </div>
      );
}