import React, { PropTypes } from 'react'
import { gql } from 'react-apollo'
import Card from './Card'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import styled, { ThemeProvider } from 'styled-components'

const themes = {
  fire: {
    primary: '#E44B4D',
  },
  grass: {
    primary: '#4CAF50',
  },
  water: {
    primary: '#2196F3',
  },
  bug: {
    primary: '#009688',
  },
  normal: {
    primary: '#4A4A4A',
  },
  poison: {
    primary: 'rgb(139, 90, 139)',
  },
  electric: {
    primary: 'rgb(246, 189, 32)',
  },
  ground: {
    primary: 'rgb(172, 156, 98)',
  },
  fairy: {
    primary: 'rgb(255, 172, 172)',
  },
  fighting: {
    primary: 'rgb(148, 139, 123)',
  },
  psychic: {
    primary: 'rgb(189, 156, 230)'
  },
  rock: {
    primary: 'rgb(123, 115, 115)'
  },
  ghost: {
    primary: '#E2E2E2',
    text: '#4A4A4A'
  },
  ice: {
    primary: '#81D4FA'
  },
  dragon: {
    primary: '#5C6BC0'
  }
}

const defaultTheme = {
  primary: '#fff',
  text: '#666'
}

const themeFromType = type => themes[type.toLowerCase()] || defaultTheme

const PokemonInfo = styled(CardInfo)`
  background: ${({ theme }) => theme.primary}
  color: ${({ theme } ) => theme.text || '#fff'}
`

const PokemonName = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const PokemonNumber = styled.div`
  text-align: center;
  font-weight: 300;
`

const PokemonImageContainer = styled.div`
  padding: 1rem;
`

const PokemonCard = ({ pokemon }) => (
  <ThemeProvider theme={ themeFromType(pokemon.types[0]) }>
    <Card>
      <PokemonImageContainer>
        <CardImage src={ pokemon.image } alt={ pokemon.name } />
      </PokemonImageContainer>
      <PokemonInfo>
        <PokemonName>{ pokemon.name }</PokemonName>
        <PokemonNumber>#{ pokemon.number }</PokemonNumber>
      </PokemonInfo>
    </Card>
  </ThemeProvider>
)

PokemonCard.fragments = {
  pokemon: gql`
    fragment PokemonCard on Pokemon {
      number
      name
      image
      types
    }
  `
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired
  })
}

export default PokemonCard
