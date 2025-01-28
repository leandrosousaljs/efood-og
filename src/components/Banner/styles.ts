import styled from 'styled-components'
import bannerFundo from '../../assets/banner-fundo.png'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  background-image: url(${bannerFundo});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const BannerCategoria = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
`
export const BannerPrato = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-top: 156.5px;
`
