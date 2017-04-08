import Header from './components/Header'
import PageContent from 'components/PageContent'
import PokemonCard from 'screens/Home/components/PokemonCard'
import PokemonTheme from 'components/PokemonTheme'
import React, { PropTypes } from 'react'
import StatCounter from 'components/StatCounter'
import Spinner from 'components/Spinner'
import TypeLabel from 'components/TypeLabel'
import Grid from 'components/Grid'
import { gql, graphql } from 'react-apollo'
import styled from 'styled-components'

const MAX_ATTACK = 150
const MAX_DEFENSE = 200
const MAX_HP = 275
const MAX_SPEED = 150
const MAX_SPECIAL_ATTACK = 175
const MAX_SPECIAL_DEFENSE = 150

const StatContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
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
    resistant,
    evolutions,
    hp,
    defense,
    speed,
    specialDefense,
    specialAttack,
    weaknesses
  } = pokemon

  return (
    <PokemonTheme type={ types[0] }>
      <div>
        <Header pokemonType={ types[0] }>
          { name }
        </Header>
        <PageContent>
          <img src={ image } alt={ name } />
          { types.map(type =>
            <TypeLabel key={ type } type={ type } />
          )}
          <StatContainer>
            <label>Attack</label>
            <StatCounter max={ MAX_ATTACK } value={ attack } width={ '80%' } />
          </StatContainer>
          <StatContainer>
            <label>Defense</label>
            <StatCounter max={ MAX_DEFENSE } value={ defense } width={ '80%' } />
          </StatContainer>
          <StatContainer>
            <label>HP</label>
            <StatCounter max={ MAX_HP } value={ hp } width={ '80%' } />
          </StatContainer>
          <StatContainer>
            <label>Speed</label>
            <StatCounter max={ MAX_SPEED } value={ speed } width={ '80%' } />
          </StatContainer>
          <StatContainer>
            <label>Special Attack</label>
            <StatCounter max={ MAX_SPECIAL_ATTACK } value={ specialAttack } width={ '80%' } />
          </StatContainer>
          <StatContainer>
            <label>Special Defense</label>
            <StatCounter max={ MAX_SPECIAL_DEFENSE } value={ specialDefense } width={ '80%' } />
          </StatContainer>
          <dl>
            <dt>Weight</dt>
            <dd>{ weight }</dd>
            <dt>Height</dt>
            <dd>{ height }</dd>
            <dt>Weaknesses</dt>
            <dd>
              { weaknesses.map(type =>
                <TypeLabel key={ type } type={ type } />
              )}
            </dd>
          </dl>

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
