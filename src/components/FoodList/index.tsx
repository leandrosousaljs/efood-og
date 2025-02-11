import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Food from '../Food'

import { Restaurant, Pedido } from '../../pages/Home'
import { addItem, open } from '../../store/reducers/cart'

import close from '../../assets/close.png'

import { AddCartButton } from './styles'
import {
  Container,
  List,
  Modal,
  ModalContent,
  FoodImage,
  ModalContainer,
  FoodTitle,
  FoodDescription,
  CloseIcon
} from './styles'

export type Props = {
  restaurant: Restaurant
  pedido: Pedido
}

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const FoodList = ({ restaurant, pedido }: Props) => {
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
    pedido.id = foodId
    pedido.nome = foodTitle
    pedido.foto = foodPhoto
    pedido.preco = foodPrice
    dispatch(addItem(pedido))
    setShowModal(false)
    dispatch(open())
  }

  return (
    <>
      <Container>
        <List>
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
                FoodPhoto={food.foto}
                FoodTitle={food.nome}
                FoodDescription={food.descricao}
                FoodPhotoAlt={food.nome}
              />
            </li>
          ))}
        </List>
      </Container>
      <Modal className={showModal ? 'visible' : ''}>
        <ModalContent>
          <FoodImage src={foodPhoto} alt={foodPhotoAlt} />
          <ModalContainer>
            <FoodTitle>{foodTitle}</FoodTitle>
            <FoodDescription>
              {foodDescription}
              <p>Serve: {foodServe}</p>
            </FoodDescription>
            <AddCartButton onClick={addToCart}>
              Adicionar ao carrinho - {priceFormat(foodPrice)}
            </AddCartButton>
          </ModalContainer>
          <CloseIcon
            onClick={() => setShowModal(false)}
            src={close}
            alt="Icone de fechar"
          />
        </ModalContent>
        <div onClick={() => setShowModal(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default FoodList
