import Container from 'components/Container'
import Header from './components/Header'
import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import { gql, graphql } from 'react-apollo'

const Pokemon = ({ data: { loading, pokemon }}) => {
  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <Header title={ pokemon.name } pokemonType={ pokemon.types[0] } />
      <Container>
        { pokemon.name }
      </Container>
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
      name
      types
    }
  }
`

export default graphql(pokemonQuery, {
  options: ({ match }) => ({ variables: { id: match.params.id }})
})(Pokemon)
