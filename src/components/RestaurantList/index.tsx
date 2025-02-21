import { useState } from 'react'

import Loader from '../../components/Loader'

import Restaurant from '../Restaurant'

import * as S from './styles'

export type Props = {
  restaurants: Restaurant[]
  isLoading?: boolean
}

const RestaurantList = ({ restaurants, isLoading }: Props) => {
  const [destaque] = useState('Destaque da semana')

  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container>
      <S.List>
        {restaurants.map((restaurants) => (
          <Restaurant
            key={restaurants.id}
            title={restaurants.titulo}
            rate={restaurants.avaliacao}
            details={restaurants.descricao}
            photo={restaurants.capa}
            categories={[
              restaurants.tipo,
              restaurants.destacado ? destaque : ''
            ]}
            toLink={`/restaurant/${restaurants.id}`}
          />
        ))}
      </S.List>
    </S.Container>
  )
}

export default RestaurantList
