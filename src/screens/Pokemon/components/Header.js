import PokemonTheme, { themeFromType } from 'components/PokemonTheme'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ballSize = 2

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
    width: ${ballSize - 0.5}rem;
    height: ${ballSize - 0.5}rem;
    bottom: -${(ballSize - 0.5) / 2}rem;
  }

  &:before {
    background-color: ${({ theme }) => theme.primary}
    width: ${ballSize}rem;
    height: ${ballSize}rem;
    bottom: -${ballSize / 2}rem;
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
