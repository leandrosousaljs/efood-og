import { ClimbingBoxLoader } from 'react-spinners'

import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <>
      <Container>
        <ClimbingBoxLoader color={colors.red} />
      </Container>
    </>
  )
}

export default Loader
