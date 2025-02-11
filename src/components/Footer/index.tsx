import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

import { FooterStyle, Branding, SocialMedia, Disclaimer } from './styles'

const Footer = () => (
  <FooterStyle>
    <Branding src={logo} alt="Logo do efood" />
    <SocialMedia>
      <img src={facebook} alt="Logo do Facebook" />
      <img src={instagram} alt="Logo do Instagram" />
      <img src={twitter} alt="Logo do Twitter" />
    </SocialMedia>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterStyle>
)

export default Footer
