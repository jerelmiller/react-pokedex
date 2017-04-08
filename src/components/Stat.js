import React from 'react'
import styled from 'styled-components'

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
    display: 'hp',
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

const BarContainer = styled.div`
  background: #eee;
  width: 85%;
  margin-left: auto;
`

const Bar = styled.div`
  background: ${({ theme }) => theme.primary}
  height: 20px;
`

const StatContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`

const Stat = ({ name, value }) => (
  <StatContainer>
    <label>{ STAT_MAP[name].display }</label>
    <BarContainer>
      <Bar style={{ width: `${value / STAT_MAP[name].max * 100}%` }} />
    </BarContainer>
  </StatContainer>
)

export default Stat
