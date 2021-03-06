import Data from './components/Data'
import DataContainer from './components/DataContainer'
import FlexContainer from 'components/FlexContainer'
import Grid from 'components/Grid'
import Header from './components/Header'
import Info from './components/Info'
import InfoContainer from './components/InfoContainer'
import InfoLabel from './components/InfoLabel'
import Name from './components/Name'
import PageContent from 'components/PageContent'
import PokemonCard from 'screens/shared/PokemonCard'
import PokemonImg from './components/PokemonImg'
import Theme from 'components/Theme'
import PropTypes from 'prop-types'
import React from 'react'
import Stat from 'components/Stat'
import Stats from './components/Stats'
import TypeLabel from 'components/TypeLabel'
import { gql, graphql } from 'react-apollo'

const Pokemon = ({ data: { loading, pokemon = {}}}) => {
  const {
    attack = 0,
    name = '',
    number = '',
    image,
    types = [],
    weight,
    height,
    evolutions = [],
    hp = 0,
    defense = 0,
    speed = 0,
    specialDefense = 0,
    specialAttack = 0,
    weaknesses = [],
    description
  } = pokemon

  return (
    <Theme type={ types[0] }>
      <div>
        <Header pokemonType={ types[0] } />
        <PageContent>
          <FlexContainer>
            <PokemonImg src={ image } alt={ name } />
            <InfoContainer>
              <Name>
                <h1>#{ number } { name }</h1>
                { types.map(type =>
                  <TypeLabel key={ type } type={ type } />
                )}
              </Name>
              <DataContainer>
                <Info>
                  <Data>{ height } m</Data>
                  <InfoLabel>Height</InfoLabel>
                </Info>
                <Info>
                  <Data>{ weight } kg</Data>
                  <InfoLabel>Weight</InfoLabel>
                </Info>
              </DataContainer>
              <p>{ description }</p>
            </InfoContainer>
          </FlexContainer>

          <Stats>
            <Stat name='attack' value={ attack } />
            <Stat name='defense' value={ defense } />
            <Stat name='hp' value={ hp } />
            <Stat name='speed' value={ speed } />
            <Stat name='specialAttack' value={ specialAttack } />
            <Stat name='specialDefense' value={ specialDefense } />
          </Stats>

          { weaknesses.map(type =>
            <TypeLabel key={ type } type={ type } />
          )}

          <h1>Evolutions</h1>
          <Grid>
            { (evolutions || []).map(pokemon =>
              <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
            )}
          </Grid>
        </PageContent>
      </div>
    </Theme>
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
      description
      weight(unit: KILOGRAM)
      height(unit: METER)
      number
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
