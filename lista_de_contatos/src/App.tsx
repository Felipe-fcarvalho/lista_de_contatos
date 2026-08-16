import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Formulario from './containers/Formulario'
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Formulario />
    </ThemeProvider >
    </Provider>
  )
}

export default App
