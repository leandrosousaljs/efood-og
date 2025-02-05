import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurant } from '../Home'

import Header from '../../components/Header'
import FoodList from '../../components/FoodList'
import Banner from '../../components/Banner'

const Profile = () => {
  const { id } = useParams()
  const [restaurantFood, setRestaurantFood] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantFood(res))
  }, [id])

  if (!restaurantFood) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Header itens={0} />
      <Banner restaurant={restaurantFood} />
      <FoodList restaurant={restaurantFood} />
    </>
  )
}

export default Profile
