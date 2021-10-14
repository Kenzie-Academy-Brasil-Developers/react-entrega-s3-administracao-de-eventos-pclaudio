import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --red: #e63946;
    --red-dark: #da1b2b;
    --white: #fff;
    --black: #0c0d0d;
    --gray-light: #eaeef3;
    --gray: #bdbdbd;
    --gray-dark: #696969;
    --primary-light: #a8dadc;
    --primary: #457b9d;
    --primary-dark: #1d3557;
    --aside-width-mobile: 60px;
    --aside-width-desktop: 260px;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--gray-light);
    color: var(--black);
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;
