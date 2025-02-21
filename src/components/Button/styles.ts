import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Props } from '.'

import { colors } from '../../styles'

export const ButtonContainer = styled(Link)<Props>`
  background-color: ${colors.red};
  color: ${colors.lightPink};
  text-decoration: none;
  font-size: ${(props) => (props.type === 'link' ? '14px' : '12px')};
  cursor: ${(props) => (props.type === 'link' ? 'pointer' : 'default')};
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 6px 4px;
  font-weight: bold;
  display: inline-block;
`
