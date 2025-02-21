import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: solid 1px ${colors.red};
  position: relative;

  .ContainerTop {
    display: flex;
    justify-content: space-between;
  }
`
export const Photo = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  margin-left: 8px;
  line-height: 22px;
`
export const Description = styled.p`
  font-size: 14px;
  margin-top: 8px;
  margin-left: 8px;
  line-height: 22px;
`
export const Rate = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 8px;
    margin-right: 8px;
    line-height: 22px;
  }

  img {
    margin-right: 8px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
export const Categories = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
`
