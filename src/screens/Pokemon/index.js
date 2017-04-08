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
            <label>HP</label>
            <StatCounter max={ 3000 } value={ hp } width={ '80%' } />
          </StatContainer>
          <StatContainer>
            <label>Attack</label>
            <StatCounter max={ 3000 } value={ attack } width={ '80%' } />
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
      image
      name
      types
      weaknesses
      hp
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
