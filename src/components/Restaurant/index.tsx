import Button from '../Button'
import { reduceDescription } from '../Food'

import Star from '../../assets/estrela.png'

import { Card, Photo, Title, Description, Rate, Categories } from './styles'

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
    <Card>
      <Photo src={photo} alt="" />
      <Categories>
        {categories.map((info) => {
          if (info) {
            return <Button key={info}>{info}</Button>
          }
        })}
      </Categories>
      <div className="ContainerTop">
        <Title>{title}</Title>
        <Rate>
          <h3>{rate}</h3>
          <img src={Star} alt="Estrela amarela" />
        </Rate>
      </div>
      <Description>{reduceDescription(details)}</Description>
      <Button type="link" to={toLink}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
