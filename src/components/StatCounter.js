import React from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
  background: #eee;
  width: ${({ width }) => width}
`

const Bar = styled.div`
  background: ${({ theme }) => theme.primary}
  height: 20px;
`

const StatCounter = ({ max, value, width }) => (
  <BarContainer width={ width }>
    <Bar style={{ width: `${value / max * 100}%` }} />
  </BarContainer>
)

export default StatCounter
