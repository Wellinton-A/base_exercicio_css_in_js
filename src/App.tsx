import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { StyledContainer } from './style'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <StyledContainer>
        <ListaVagas />
      </StyledContainer>
    </>
  )
}

export default App
