import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globals'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { IssuesContextProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
