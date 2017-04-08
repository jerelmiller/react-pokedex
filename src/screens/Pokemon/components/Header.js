import PokemonTheme, { themeFromType } from 'components/PokemonTheme'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ThemedHeader = styled.header`
  background: ${({ theme }) => theme.primary}
  color: ${({ theme }) => theme.text}
  position: relative;
  height: 4.5rem;

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

const CloseButton = styled(Link)`
  color: ${({ theme }) => theme.text}
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-weight: 300;
  line-height: 1rem;
  display: block;
  font-size: 3rem;
  opacity: 0.5;
`

const Header = ({ children, pokemonType }) => (
  <PokemonTheme type={ pokemonType }>
    <ThemedHeader>
      <CloseButton to='/pokemon'>
        &times;
      </CloseButton>
    </ThemedHeader>
  </PokemonTheme>
)

export default Header
