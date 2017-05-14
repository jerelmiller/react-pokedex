import { styled } from 'styletron-react'

export default styled('div', ({
  align = 'flex-start',
  justify = 'flex-start'
}) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify
}))
