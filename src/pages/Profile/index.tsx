import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Cart from '../../components/Cart'

import { useGetRestaurantSelectedQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id!)

  if (restaurantFood) {
    return (
      <>
        <Header />
        <Banner restaurant={restaurantFood} />
        <FoodList
          restaurant={restaurantFood}
          pedido={{
            id: 0,
            nome: '',
            foto: '',
            preco: 0
          }}
        />
        <Cart />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Profile
