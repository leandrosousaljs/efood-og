import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: solid 1px ${cores.vermelho};

  .ContainerTop {
    display: flex;
    justify-content: space-between;
  }
  position: relative;
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
  }
`
export const Categories = styled.div`
  position: absolute;
  top: 0;
  right: 16px;
`
