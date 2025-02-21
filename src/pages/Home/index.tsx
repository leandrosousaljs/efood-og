import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import Loader from '../../components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantList restaurants={restaurants} />
      </>
    )
  }
  return <Loader />
}
export default Home
