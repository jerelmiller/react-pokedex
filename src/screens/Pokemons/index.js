import Container from 'components/Container'
import Grid from 'components/Grid'
import Header from './components/Header'
import Pokeball from 'components/Pokeball'
import PokemonCard from 'screens/shared/PokemonCard'
import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import { gql, graphql } from 'react-apollo'

const Pokemons = ({ data: { loading, pokemons }}) => {
  if (loading) {
    return <Spinner size={ 80 } />
  }

  return (
    <div>
      <Header>
        <Container>
          <Pokeball size={ 40 } />
          <h1>React Pokedex</h1>
        </Container>
      </Header>
      <Container>
        <Grid>
          { pokemons.map(pokemon =>
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          )}
        </Grid>
      </Container>
    </div>
  )
}

Pokemons.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    pokemons: PropTypes.array
  }).isRequired
}

export default graphql(gql`
  query GetPokemons {
    pokemons {
      id
      ...PokemonCard
    }
  }
  ${PokemonCard.fragments.pokemon}
`)(Pokemons)
