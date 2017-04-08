import FlexContainer from 'components/FlexContainer'
import Header from './components/Header'
import PageContent from 'components/PageContent'
import PokemonCard from 'screens/Home/components/PokemonCard'
import PokemonTheme from 'components/PokemonTheme'
import React, { PropTypes } from 'react'
import Stat from 'components/Stat'
import Spinner from 'components/Spinner'
import TypeLabel from 'components/TypeLabel'
import Grid from 'components/Grid'
import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'

const PokemonImg = styled.img`
  max-width: 250px;
  flex: 1;
  margin-right: 2%;
`

const PokemonInfoContainer = styled.section`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const PokemonInfo = styled.div`
  border-right: 1px solid #ddd;
  padding: 20px;
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

const Pokemon = ({ data: { loading, pokemon }}) => {
  if (loading) {
    return <Spinner />
  }

  const {
    attack,
    name,
    image,
    types,
    weight,
    height,
    evolutions,
    hp,
    defense,
    speed,
    specialDefense,
    specialAttack,
    weaknesses,
    description
  } = pokemon

  return (
    <PokemonTheme type={ types[0] }>
      <div>
        <Header pokemonType={ types[0] } />
        <PageContent>
          <h1>{ name }</h1>
          { types.map(type =>
            <TypeLabel key={ type } type={ type } />
          )}
          <FlexContainer>
            <PokemonImg src={ image } alt={ name } />
            <PokemonInfoContainer>
              <PokemonInfo>
                <Data>{ height } m</Data>
                <InfoLabel>Height</InfoLabel>
              </PokemonInfo>
              <PokemonInfo>
                <Data>{ weight } kg</Data>
                <InfoLabel>Weight</InfoLabel>
              </PokemonInfo>
            </PokemonInfoContainer>
          </FlexContainer>
          <div>{ description }</div>
          <Stat name='attack' value={ attack } />
          <Stat name='defense' value={ defense } />
          <Stat name='hp' value={ hp } />
          <Stat name='speed' value={ speed } />
          <Stat name='specialAttack' value={ specialAttack } />
          <Stat name='specialDefense' value={ specialDefense } />

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
