// import Pokemons from 'screens/Pokemons'
// import Pokemon from 'screens/Pokemon'
import React  from 'react'
import environment from 'config/environment'
import { Redirect, Route } from 'react-router-dom'
import { QueryRenderer, graphql } from 'react-relay'

const App = () =>
  <QueryRenderer
    environment={ environment }
    query={ graphql`
      query AppQuery {
        pokemons {
          ...index_pokemons
        }
      }
    `}
    render={ ({ error, props }) => {
      return <div>Render me</div>
    }}
  />
  // <div>
  //   <Route exact path='/' render={ () => <Redirect to='/pokemon' /> } />
  //   <Route exact path='/pokemon' render={
  //     <QueryRenderer
  //       environment={ environment }
  //       query={ graphql`
  //         query AppQuery {
  //           pokemons {
  //             ...index_pokemons
  //           }
  //         }
  //       `}
  //       render={ ({ error, props }) => {
  //         if (error) {
  //           return <div>Error...</div>
  //         } else if (props) {
  //           return <Pokemons { ...props } />
  //         }

  //         return <div>Loading...</div>
  //       }}
  //     />
  //   } />
  //   <Route path='/pokemon/:id' component={ Pokemon } />
  // </div>

export default App
