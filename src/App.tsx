import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './components/Footer'

import Rotas from './routes'
import { store } from './store'

import { GlobalCSS } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
