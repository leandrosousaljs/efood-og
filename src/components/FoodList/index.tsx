import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Food from '../Food'

import { addItem, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import close from '../../assets/close.png'

import { AddCartButton } from './styles'
import * as S from './styles'

export type Props = {
  restaurant: Restaurant
  order: Pedido
}

const FoodList = ({ restaurant, order }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setFoodTitle] = useState('')
  const [foodDescription, setFoodDescription] = useState('')
  const [foodPhoto, setFoodPhoto] = useState('')
  const [foodPhotoAlt, setFoodPhotoAlt] = useState('')
  const [foodServe, setFoodServe] = useState('')
  const [foodPrice, setFoodPrice] = useState(0)
  const [foodId, setFoodId] = useState(0)

  const dispatch = useDispatch()
  const addToCart = () => {
    order.id = foodId
    order.nome = foodTitle
    order.foto = foodPhoto
    order.preco = foodPrice
    dispatch(addItem(order))
    setShowModal(false)
    dispatch(open())
  }

  return (
    <>
      <S.Container>
        <S.List>
          {restaurant.cardapio.map((food) => (
            <li
              key={food.id}
              onClick={() => {
                setShowModal(true)
                setFoodTitle(food.nome)
                setFoodDescription(food.descricao)
                setFoodServe(food.porcao)
                setFoodPrice(food.preco)
                setFoodPhotoAlt(food.nome)
                setFoodPhoto(food.foto)
                setFoodId(food.id)
              }}
            >
              <Food
                key={food.id}
                foodPhoto={food.foto}
                foodTitle={food.nome}
                foodDescription={food.descricao}
                foodPhotoAlt={food.nome}
              />
            </li>
          ))}
        </S.List>
      </S.Container>
      <S.Modal className={showModal ? 'visible' : ''}>
        <S.ModalContent>
          <S.FoodImage src={foodPhoto} alt={foodPhotoAlt} />
          <S.ModalContainer>
            <S.FoodTitle>{foodTitle}</S.FoodTitle>
            <S.FoodDescription>
              {foodDescription}
              <p>Serve: {foodServe}</p>
            </S.FoodDescription>
            <AddCartButton onClick={addToCart}>
              Adicionar ao carrinho - {parseToBrl(foodPrice)}
            </AddCartButton>
          </S.ModalContainer>
          <S.CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Icone de fechar"
          />
        </S.ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default FoodList
