import { createGlobalStyle } from "styled-components";
import { theme } from "../themes/themes.styles";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%; //10px / 16px = 62.5% -> 1rem = 10px
}

body {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.white.one};
    /* background-color: ${({ theme }) => theme.colors.black.three}; */
} 

a {
    text-decoration: none;
      list-style: none;
      color: $color-text-dark-1;
      transition: all 0.2s;
  
      &:hover {
        color: $color-text-dark-3;
      }
}
`;


