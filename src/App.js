import Grid from './components/Grid'
import PokemonCard from './components/PokemonCard'
import React, { PropTypes } from 'react'
import { gql, graphql } from 'react-apollo'
import './App.css'

const App = ({ loading, data: { pokemons = [] }}) => {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Grid>
        { pokemons.map(pokemon =>
          <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        )}
      </Grid>
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
    pokemons(first: 151) {
      id
      ...PokemonCard
    }
  }
  ${PokemonCard.fragments.pokemon}
`)(App)
