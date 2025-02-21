import logo from '../../assets/logo.png'

import * as S from './styles'

const Hero = () => (
  <S.HeroContainer>
    <S.Branding src={logo} alt="Logo do efood" />
    <S.Slogan>Viva experiências gastronômicas no conforto da sua casa</S.Slogan>
  </S.HeroContainer>
)
export default Hero
