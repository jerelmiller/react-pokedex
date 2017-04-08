import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'flex-start'}
  justify-content: ${({ justify }) => justify || 'flex-start'}
`
