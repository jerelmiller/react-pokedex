import React, { PropTypes } from 'react'
import { gql } from 'react-apollo'
import CardLink from 'components/CardLink'
import CardImage from 'components/CardImage'
import CardInfo from 'components/CardInfo'
import Theme from 'components/Theme'
import styled from 'styled-components'

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
  margin-top: auto;
  align-self: center;
`

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
