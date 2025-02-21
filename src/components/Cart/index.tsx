import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, removeItem, startCheckout } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import Checkout from '../Checkout'

import * as S from './styles'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(close())
  }
  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
  }

  const getTotalPrice = () => {
    return pedido.reduce((accumulator, actualValue) => {
      return (accumulator += actualValue.preco)
    }, 0)
  }
  const remItem = (id: number) => {
    dispatch(removeItem(id))
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={openCart} />
      <S.Sidebar>
        <S.CartStage className={!isCart ? 'is-checkout' : ''}>
          <ul>
            {pedido.map((p) => (
              <S.ItemCart key={p.id}>
                <S.ImageItem src={p.foto} alt="" />
                <S.InfosItem>
                  <h3>{p.nome}</h3>
                  <span>{parseToBrl(p.preco)}</span>
                </S.InfosItem>
                <S.DeleteItemButton
                  type="button"
                  onClick={() => remItem(p.id)}
                />
              </S.ItemCart>
            ))}
          </ul>
          <S.InfosCart>
            <p>Valor total</p>
            <span>{parseToBrl(getTotalPrice())}</span>
          </S.InfosCart>
          <S.AddCartButton onClick={activeCheckout}>
            Continuar com a entrega
          </S.AddCartButton>
        </S.CartStage>
        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
