import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterStyle>
    <S.Branding src={logo} alt="Logo do efood" />
    <S.SocialMedia>
      <img src={facebook} alt="Logo do Facebook" />
      <img src={instagram} alt="Logo do Instagram" />
      <img src={twitter} alt="Logo do Twitter" />
    </S.SocialMedia>
    <S.Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Disclaimer>
  </S.FooterStyle>
)

export default Footer
