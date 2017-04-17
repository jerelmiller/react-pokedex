import FlexContainer from 'components/FlexContainer'
import Header from './components/Header'
import PageContent from 'components/PageContent'
import PokemonCard from 'screens/shared/PokemonCard'
import PokemonTheme from 'components/PokemonTheme'
import React, { PropTypes } from 'react'
import Stat from 'components/Stat'
import TypeLabel from 'components/TypeLabel'
import Grid from 'components/Grid'
import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'

const PokemonImg = styled.img`
  max-width: 250px;
  flex: 1;
  margin-right: 2%;
`

const PokemonInfoContainer = styled.div`
  flex: 2;
`

const PokemonDataContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5rem;
`

const PokemonInfo = styled.div`
  flex: 1;
  text-align: center;
`

const InfoLabel = styled.label`
  display: block;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0.5rem;
  color: #666;
`

const Data = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`

const Name = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`

const Stats = styled.div`
  margin-top: 1.5rem;
`

const Pokemon = ({ data: { loading, pokemon = {}}}) => {
  const {
    attack = 0,
    name = '',
    number = '',
    image,
    types = [],
    weight,
    height,
    evolutions = [],
    hp = 0,
    defense = 0,
    speed = 0,
    specialDefense = 0,
    specialAttack = 0,
    weaknesses = [],
    description
  } = pokemon

  return (
    <PokemonTheme type={ types[0] }>
      <div>
        <Header pokemonType={ types[0] } />
        <PageContent>
          <FlexContainer>
            <PokemonImg src={ image } alt={ name } />
            <PokemonInfoContainer>
              <Name>
                <h1>#{ number } { name }</h1>
                { types.map(type =>
                  <TypeLabel key={ type } type={ type } />
                )}
              </Name>
              <PokemonDataContainer>
                <PokemonInfo>
                  <Data>{ height } m</Data>
                  <InfoLabel>Height</InfoLabel>
                </PokemonInfo>
                <PokemonInfo>
                  <Data>{ weight } kg</Data>
                  <InfoLabel>Weight</InfoLabel>
                </PokemonInfo>
              </PokemonDataContainer>
              <p>{ description }</p>
            </PokemonInfoContainer>
          </FlexContainer>

          <Stats>
            <Stat name='attack' value={ attack } />
            <Stat name='defense' value={ defense } />
            <Stat name='hp' value={ hp } />
            <Stat name='speed' value={ speed } />
            <Stat name='specialAttack' value={ specialAttack } />
            <Stat name='specialDefense' value={ specialDefense } />
          </Stats>

          { weaknesses.map(type =>
            <TypeLabel key={ type } type={ type } />
          )}

          <h1>Evolutions</h1>
          <Grid>
            { (evolutions || []).map(pokemon =>
              <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
            )}
          </Grid>
        </PageContent>
      </div>
    </PokemonTheme>
  )
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    pokemon: PropTypes.object
  }).isRequired
}

const pokemonQuery = gql`
  query GetPokemon($id: ID!) {
    pokemon(id: $id) {
      attack
      defense
      hp
      speed
      specialDefense
      specialAttack
      image
      name
      types
      weaknesses
      description
      weight(unit: KILOGRAM)
      height(unit: METER)
      number
      evolutions {
        id
        ...PokemonCard
      }
    }
  }

  ${PokemonCard.fragments.pokemon}
`

export default graphql(pokemonQuery, {
  options: ({ match }) => ({ variables: { id: match.params.id }})
})(Pokemon)
