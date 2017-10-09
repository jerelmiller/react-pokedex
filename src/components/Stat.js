import React from 'react'
import glamorous from 'glamorous'

const STAT_MAP = {
  attack: {
    display: 'Attack',
    max: 150
  },
  defense: {
    display: 'Defense',
    max: 200
  },
  hp: {
    display: 'HP',
    max: 275
  },
  speed: {
    display: 'Speed',
    max: 150
  },
  specialAttack: {
    display: 'Special Attack',
    max: 175
  },
  specialDefense: {
    display: 'Special Defense',
    max: 150
  }
}

const BarContainer = glamorous.div({
  background: '#eee',
  width: '85%',
  marginLeft: 'auto'
})

const Bar = glamorous.div(
  { height: '20px' },
  ({ theme }) => ({
    background: theme.primary
  })
)

const StatContainer = glamorous.div({
  display: 'flex',
  marginBottom: '1.5rem',
})

const Stat = ({ name, value }) => (
  <StatContainer>
    <label>{ STAT_MAP[name].display }</label>
    <BarContainer>
      <Bar style={{ width: `${value / STAT_MAP[name].max * 100}%` }} />
    </BarContainer>
  </StatContainer>
)

export default Stat
