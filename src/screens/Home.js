import Grid from 'components/Grid'
import PokemonCard from 'components/PokemonCard'
import React, { PropTypes } from 'react'
import Spinner from 'components/Spinner'
import styled from 'styled-components'
import { gql, graphql } from 'react-apollo'

const PokemonContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Home = ({ data: { loading, pokemons }}) => {
  if (loading) {
    return <Spinner size={ 80 } />
  }

  return (
    <PokemonContainer>
      <Grid>
        { pokemons.map(pokemon =>
          <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        )}
      </Grid>
    </PokemonContainer>
  )
}

Home.propTypes = {
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
`)(Home)
