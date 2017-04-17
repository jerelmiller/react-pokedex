import React from 'react'
import Theme from './Theme'
import styled from 'styled-components'

const Label = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => theme.primary}
  color: ${({ theme }) => theme.text}
  border-radius: 2px;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-right: 5px;
`

const TypeLabel = ({ type }) => (
  <Theme type={ type }>
    <Label>{ type }</Label>
  </Theme>
)

export default TypeLabel
