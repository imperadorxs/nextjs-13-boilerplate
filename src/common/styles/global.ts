import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${({ theme }) => css`
  html {
    font-size: 62.5%; // 1rem to equal 10px
  }

  html,
  body,
  #__next {
    height: 100%;
    background-color: #333;
    color: #ccc;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
  }
`}


`;
