import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--black);
    text-align: center;
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    color: var(--black);
    text-align: center;
    margin: 10px 0;
  }
`;
