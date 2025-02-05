import { BannerContainer, BannerCategoria, BannerPrato } from './styles'

import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurant: Restaurant
}
const Banner = ({ restaurant }: Props) => (
  <BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <BannerCategoria>{restaurant.tipo}</BannerCategoria>
      <BannerPrato>{restaurant.titulo}</BannerPrato>
    </div>
  </BannerContainer>
)

export default Banner
