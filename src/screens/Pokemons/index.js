import Container from 'components/Container'
import Grid from 'components/Grid'
import Header from './components/Header'
import Pokeball from 'components/Pokeball'
import PokemonCard from 'screens/shared/PokemonCard'
import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import environment from 'config/environment'
import { createFragmentContainer, graphql } from 'react-relay'

// const Pokemons = ({ data: { loading, pokemons }}) => {
const Pokemons = ({ pokemons }) => {
  // if (loading) {
  //   return <Spinner size={ 80 } />
  // }

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

export default createFragmentContainer(
  Pokemons,
  graphql`
    fragment index_pokemons on Pokemon {
      id
      ...PokemonCard_pokemon
    }
  `
)

// Pokemons.propTypes = {
//   data: PropTypes.shape({
//     loading: PropTypes.bool.isRequired,
//     pokemons: PropTypes.array
//   }).isRequired
// }

// export default graphql(gql`
//   query GetPokemons {
//     pokemons {
//       id
//       ...PokemonCard
//     }
//   }
//   ${PokemonCard.fragments.pokemon}
// `)(Pokemons)
