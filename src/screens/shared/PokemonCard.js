import React, { PropTypes } from 'react'
import { gql } from 'react-apollo'
import CardLink from 'components/CardLink'
import CardImage from 'components/CardImage'
import CardInfo from 'components/CardInfo'
import Theme from 'components/Theme'
import styled from 'styled-components'
import glamorous from 'glamorous'

const PokemonInfo = styled(CardInfo)`
  background: ${({ theme }) => theme.primary}
  color: ${({ theme } ) => theme.text || '#fff'}
`

const PokemonName = glamorous.h3({
  textAlign: 'center',
  marginTop: 0,
  marginBottom: '0.5rem'
})

const PokemonNumber = glamorous.div({
  textAlign: 'center',
  fontWeight: 300
})

const PokemonImageContainer = glamorous.div({
  padding: '1rem',
  marginTop: 'auto',
  alignSelf: 'center'
})

const PokemonCard = ({ pokemon }) => (
  <Theme type={ pokemon.types[0] }>
    <CardLink to={ `/pokemon/${pokemon.id}` }>
      <PokemonImageContainer>
        <CardImage src={ pokemon.image } alt={ pokemon.name } />
      </PokemonImageContainer>
      <PokemonInfo>
        <PokemonName>{ pokemon.name }</PokemonName>
        <PokemonNumber>#{ pokemon.number }</PokemonNumber>
      </PokemonInfo>
    </CardLink>
  </Theme>
)

PokemonCard.fragments = {
  pokemon: gql`
    fragment PokemonCard on Pokemon {
      id
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
