import Button from '../Button'

import Star from '../../assets/estrela.png'

import { reduceDescription } from '../../utils'

import * as S from './styles'

type Props = {
  title: string
  rate: number
  details: string
  photo: string
  categories: string[]
  toLink: string
}

const Restaurant = ({
  title,
  rate,
  details,
  photo,
  categories,
  toLink
}: Props) => {
  return (
    <S.Card>
      <S.Photo src={photo} alt={title} />
      <S.Categories>
        {categories.map((info) => {
          if (info) {
            return <Button key={info}>{info}</Button>
          }
        })}
      </S.Categories>
      <div className="ContainerTop">
        <S.Title>{title}</S.Title>
        <S.Rate>
          <h3>{rate}</h3>
          <img src={Star} alt="Estrela amarela" />
        </S.Rate>
      </div>
      <S.Description>{reduceDescription(details)}</S.Description>
      <Button type="link" to={toLink}>
        Saiba mais
      </Button>
    </S.Card>
  )
}

export default Restaurant
