import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import logo from '../../assets/logo.png'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { pedido } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderStyle>
      <div className="container">
        <S.LinkRestaurantes href="/">Restaurantes</S.LinkRestaurantes>
        <h1>
          <S.Branding src={logo} alt="Logo EFood" />
        </h1>
        <S.TextCart onClick={openCart}>
          {pedido.length} produto(s) no carrinho
        </S.TextCart>
      </div>
    </S.HeaderStyle>
  )
}

export default Header
