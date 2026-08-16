import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { Formulario } from './components/Formulario'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Formulario />
    </ThemeProvider >
  )
}

export default App
