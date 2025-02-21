import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.red};
  color: ${colors.lightPink};
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`
export const Photo = styled.img`
  max-height: 167px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
  line-height: 22px;
`
export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 22px;
`
export const AddCartButton = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.red};
  border: none;
  padding: 4px 8px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
`
