import { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    background-color: ${variables.cinzaBG};
}
`

export default GlobalStyle
