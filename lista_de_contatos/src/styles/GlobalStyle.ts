import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0 auto;
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
export default GlobalStyle
