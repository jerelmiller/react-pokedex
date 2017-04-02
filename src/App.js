import React, { PropTypes } from 'react'
import { gql, graphql } from 'react-apollo'
import './App.css'

const App = ({ loading, data: { pokemons = [] }}) => {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      { pokemons.map(pokemon =>
        <div key={ pokemon.number }>
          { pokemon.number } { pokemon.name }
          <img src={ pokemon.image } alt={ pokemon.name } />
        </div>
      )}
    </div>
  )
}

App.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    pokemons: PropTypes.array
  }).isRequired
}

export default graphql(gql`
  query GetPokemons {
    pokemons(first: 10) {
      number
      name
      image
    }
  }
`)(App)
