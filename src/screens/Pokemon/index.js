import Header from './components/Header'
import PageContent from 'components/PageContent'
import PokemonCard from 'screens/Home/components/PokemonCard'
import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import Grid from 'components/Grid'
import { gql, graphql } from 'react-apollo'

const Pokemon = ({ data: { loading, pokemon }}) => {
  if (loading) {
    return <Spinner />
  }

  const {
    classification,
    name,
    image,
    types,
    weight,
    height,
    resistant,
    evolutions,
    maxHP,
    weaknesses,
    attacks
  } = pokemon

  return (
    <div>
      <Header pokemonType={ types[0] }>
        { name }
      </Header>
      <PageContent>
        <img src={ image } alt={ name } />
        { types.join(', ') }
        <dl>
          <dt>Weight (min)</dt>
          <dd>{ weight.minimum }</dd>
          <dt>Weight (max)</dt>
          <dd>{ weight.maximum }</dd>
          <dt>Height (min)</dt>
          <dd>{ height.minimum }</dd>
          <dt>Height (max)</dt>
          <dd>{ height.maximum }</dd>
          <dt>Classification</dt>
          <dd>{ classification }</dd>
          <dt>Resistant</dt>
          <dd>{ resistant.join(', ') }</dd>
          <dt>Max HP</dt>
          <dd>{ maxHP }</dd>
          <dt>Weaknesses</dt>
          <dd>{ weaknesses.join(', ') }</dd>
          <dt>Fast Attacks</dt>
          <dd>{ attacks.fast.map(attack => attack.name).join(', ') }</dd>
          <dt>Special Attacks</dt>
          <dd>{ attacks.special.map(attack => attack.name).join(', ') }</dd>
        </dl>

        <h1>Evolutions</h1>
        <Grid>
          { (evolutions || []).map(pokemon =>
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          )}
        </Grid>
      </PageContent>
    </div>
  )
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    pokemon: PropTypes.object
  }).isRequired
}

const pokemonQuery = gql`
  query GetPokemon($id: String) {
    pokemon(id: $id) {
      classification
      image
      name
      types
      resistant
      maxHP
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      evolutions {
        id
        ...PokemonCard
      }
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }

  ${PokemonCard.fragments.pokemon}
`

export default graphql(pokemonQuery, {
  options: ({ match }) => ({ variables: { id: match.params.id }})
})(Pokemon)
