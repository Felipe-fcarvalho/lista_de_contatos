import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
font-family: ${({theme}) => theme.font.text};
font-size: ${({theme}) => theme.font.fontSizeMedium};
background-color: ${({theme}) => theme.color.backgroundPrimary};
color: ${({theme}) => theme.color.textPrimary};
}
`

export const colunas = `
  grid-template-columns: 40px 2fr 2fr 1.5fr 90px;
  align-items: center;
`
export default GlobalStyle
