import { useState } from 'react'

import Product from '../Restaurant'

import { Restaurant } from '../../pages/Home'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const ProductList = ({ restaurants }: Props) => {
  const [destaque, setDestaque] = useState('Destaque da semana')
  return (
    <Container>
      <List>
        {restaurants.map((restaurants) => (
          <Product
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
      </List>
    </Container>
  )
}

export default ProductList
