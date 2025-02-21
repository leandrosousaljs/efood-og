import { reduceDescription } from '../../utils'

import * as S from './styles'

export type Props = {
  foodPhoto: string
  foodTitle: string
  foodDescription: string
  foodPhotoAlt: string
}

const Food = ({
  foodPhoto,
  foodTitle,
  foodDescription,
  foodPhotoAlt
}: Props) => {
  return (
    <S.Card>
      <S.Photo src={foodPhoto} alt={foodPhotoAlt} />
      <S.Title>{foodTitle}</S.Title>
      <S.Description>{reduceDescription(foodDescription)}</S.Description>
      <S.AddCartButton to={''}>Adicionar ao carrinho</S.AddCartButton>
    </S.Card>
  )
}

export default Food
