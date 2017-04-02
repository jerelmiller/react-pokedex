import styled from 'styled-components'
import GridItem from './GridItem'

const Card = styled(GridItem)`
  display: flex;
  flex-direction: column;
  flex: 1 23%;
  background: #fff;
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.25);
  margin: 1%;
  border-radius: 3px;
`

export default Card
