import styled from 'styled-components'

import headerBackground from '../../assets/fundoHero.png'

import { breakpoints, colors } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${headerBackground});

  .container {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 186px;

    h1 {
      line-height: 0;
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
export const Branding = styled.img`
  max-width: 125px;
  width: 100%;
  height: 57.5px;
  margin: 63px 0;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`
export const LinkRestaurantes = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.red};
  margin: 82px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 24px;
    margin-bottom: 16px;
  }
`
export const TextCart = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 39px;
  cursor: pointer;
  margin: 82px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`
