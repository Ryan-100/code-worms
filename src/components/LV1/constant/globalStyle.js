import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;

    font-family: 'Roboto Slab', Helvetica, Sans-Serif;

    background-color: #192026;

    & .required {
      color: red;
    }
  }

`;

export default GlobalStyle;
