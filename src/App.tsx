import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'

import { GlobalCSS } from './styles'

import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
