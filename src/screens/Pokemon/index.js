import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import { gql, graphql } from 'react-apollo'

const Pokemon = ({ data: { loading, pokemon }}) => {
  if (loading) {
    return <Spinner />
  }

  return (
    <div>{ pokemon.name }</div>
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
      name
    }
  }
`

export default graphql(pokemonQuery, {
  options: ({ match }) => ({ variables: { id: match.params.id }})
})(Pokemon)
