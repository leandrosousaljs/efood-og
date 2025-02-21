import * as S from './styles'

export type Props = {
  restaurant: Restaurant
}
const Banner = ({ restaurant }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <S.BannerCategory>{restaurant.tipo}</S.BannerCategory>
      <S.BannerDish>{restaurant.titulo}</S.BannerDish>
    </div>
  </S.BannerContainer>
)

export default Banner
