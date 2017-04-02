import PokemonTheme from 'components/PokemonTheme'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.primary}
  color: ${({ theme }) => theme.text}
  padding: 1.5rem;
  position: relative;

  &:after, &:before {
    content: '';
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    background-color: #f6f6f6;
    width: 1.0rem;
    height: 1.0rem;
    bottom: -0.5rem;
  }

  &:before {
    background-color: ${({ theme }) => theme.primary}
    width: 1.5rem;
    height: 1.5rem;
    bottom: -0.75rem;
  }
`

const Heading = styled.h2`
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`

const Header = ({ title, pokemonType }) => (
  <PokemonTheme type={ pokemonType }>
    <StyledHeader>
      <Heading>{ title }</Heading>
    </StyledHeader>
  </PokemonTheme>
)

export default Header
