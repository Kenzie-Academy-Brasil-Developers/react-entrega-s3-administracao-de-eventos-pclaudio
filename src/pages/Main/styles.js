import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Aside = styled.aside`
  min-height: 100vh;
  width: 60px;
  background-color: var(--primary);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: var(--white);
  padding-top: 40px;

  ul {
    li {
      margin-bottom: 10px;

      button {
        border: none;
        padding: 0;
        background-color: transparent;
        width: 100%;
        color: var(--white);

        svg {
          font-size: 40px;
        }

        span {
          display: none;
        }
      }
    }
  }

  @media (min-width: 600px) {
    width: 260px;
    padding-left: 20px;

    ul {
      li {
        margin-bottom: 20px;

        button {
          display: flex;
          align-items: center;

          span {
            display: inline-block;
            margin-left: 10px;
            font-size: 1.3rem;
            font-weight: 500;
          }
        }
      }
    }
  }
`;

export const MainContent = styled.main`
  padding: 16px;
  width: calc(100% - var(--aside-width-mobile));

  @media (min-width: 600px) {
    padding: 10px 20px;
    width: calc(100% - var(--aside-width-desktop));
  }
`;
