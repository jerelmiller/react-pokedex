import React from 'react'
import PokemonTheme from './PokemonTheme'
import styled from 'styled-components'

const Label = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => theme.primary}
  color: ${({ theme }) => theme.text}
  border-radius: 2px;
  font-size: 0.8rem;
`

const TypeLabel = ({ type }) => (
  <PokemonTheme type={ type }>
    <Label>{ type }</Label>
  </PokemonTheme>
)

export default TypeLabel
