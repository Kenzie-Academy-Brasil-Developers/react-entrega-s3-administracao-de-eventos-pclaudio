import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;

  hr {
    margin: 10px 0;
  }

  select {
    width: 100%;
    padding: 10px;
    border-style: none;
    border: 1px solid;
    border-radius: 4px;
    background-color: var(--white);
    text-align: center;
    font-size: 1.3rem;
  }

  & .error {
    color: var(--red-dark);
    padding-top: 10px;
  }

  @media (min-width: 600px) {
    max-width: 295px;
    margin: 10px 5px;
  }
`;

export const CardImage = styled.div`
  text-align: center;

  img {
    height: 200px;
  }
`;

export const CardBrewedSince = styled.p`
  text-align: right;
  margin: 10px 0;
  color: var(--gray-dark);

  &::before {
    content: "brewed since ";
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
`;

export const CardDescription = styled.p`
  flex-grow: 1;
  margin: 10px 0;
  font-size: 1.1rem;
  color: var(--gray-dark);
`;

export const CardVolume = styled.p`
  text-align: right;
  margin: 10px 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-style: none;
  border-radius: 4px;
  text-align: center;
  font-size: 1.3rem;
  color: var(--white);
  background-color: var(--red-dark);

  &:hover {
    background-color: var(--red);
  }
`;
