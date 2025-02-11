import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.palhaClara};
  max-width: 100%;
  display: flex;
  flex-direction: column;
`

export const Photo = styled.img`
  margin: 8px;
  max-width: 304px;
  max-height: 167px;
  width: 100%;
  object-fit: cover;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 0 8px;
`

export const Description = styled.p`
  font-size: 14px;
  margin: 8px 8px 0px 8px;
  line-height: 22px;
`

export const AddCartButton = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 7px;
  margin: 8px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
