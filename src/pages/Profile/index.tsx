import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import FoodList from '../../components/FoodList'
import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

import { useGetRestaurantSelectedQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Profile = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id)

  if (restaurantFood) {
    return (
      <>
        <Header />
        <Banner restaurant={restaurantFood} />
        <FoodList
          restaurant={restaurantFood}
          order={{
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
  return <Loader />
}

export default Profile
