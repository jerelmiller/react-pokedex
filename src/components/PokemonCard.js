import React, { PropTypes } from 'react'
import { gql } from 'react-apollo'
import Card from './Card'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import styled from 'styled-components'
import H4 from './H4'

const PokemonName = styled.h4`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const PokemonNumber = styled.div`
  text-align: center;
  color: #999;
`

const PokemonImageContainer = styled.div`
  padding: 1rem;
`

const PokemonCard = ({ pokemon }) => (
  <Card>
    <PokemonImageContainer>
      <CardImage src={ pokemon.image } alt={ pokemon.name } />
    </PokemonImageContainer>
    <CardInfo>
      <PokemonName>{ pokemon.name }</PokemonName>
      <PokemonNumber>#{ pokemon.number }</PokemonNumber>
    </CardInfo>
  </Card>
)

PokemonCard.fragments = {
  pokemon: gql`
    fragment PokemonCard on Pokemon {
      number
      name
      image
    }
  `
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object
}

export default PokemonCard
