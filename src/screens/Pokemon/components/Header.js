import LeftArrow from 'components/LeftArrow'
import PokemonTheme, { themeFromType } from 'components/PokemonTheme'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ThemedHeader = styled.header`
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

const BackButton = styled(Link)`
  color: ${({ theme }) => theme.text}
  position: absolute;
  left: 1.5rem;
  top: 0.75rem;
  font-weight: 700;
  padding-right: 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.text}
  line-height: 1.5rem;
  height: 3rem;
  display: block;

  svg {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Header = ({ title, pokemonType }) => (
  <PokemonTheme type={ pokemonType }>
    <ThemedHeader>
      <BackButton to='/pokemon'>
        <LeftArrow
          size='2rem'
          color={ themeFromType(pokemonType).text }
        />
      </BackButton>
      <Heading>{ title }</Heading>
    </ThemedHeader>
  </PokemonTheme>
)

export default Header
