import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import GlobalStyle from './styles/GlobalStyle'
import store from './store'

const rotas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/novo', element: <Cadastro /> }
])

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={rotas} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
