import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  pink: '#FFEBD9',
  white: '#FFFFFF',
  lightPink: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${colors.lightPink};
    color: ${colors.red};
  }

  a, button {
    cursor: pointer;
  }
`
