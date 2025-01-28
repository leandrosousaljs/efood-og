import { BannerContainer, BannerCategoria, BannerPrato } from './styles'
const Banner = () => (
  <BannerContainer>
    <div className="container">
      <BannerCategoria>Italiana</BannerCategoria>
      <BannerPrato>La Dolce Vita Trattoria</BannerPrato>
    </div>
  </BannerContainer>
)

export default Banner
