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
          <Stat name='attack' value={ attack } />
          <Stat name='defense' value={ defense } />
          <Stat name='hp' value={ hp } />
          <Stat name='speed' value={ speed } />
          <Stat name='specialAttack' value={ specialAttack } />
          <Stat name='specialDefense' value={ specialDefense } />
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
