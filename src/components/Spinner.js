import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounceAnimation = keyframes`
  0%, 100% { transform: scale(0) }
  50% { transform: scale(1) }
`

const SpinnerContainer = styled.div`
  width: ${({ size }) => size}px
  height: ${({ size }) => size}px

  position: relative;
  margin: 150px auto;
`

const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(139, 90, 139);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounceAnimation} 2s infinite ease-in-out;
  animation-delay: ${({ delay = 0 }) => delay}s
`


const Spinner = ({ size = 40 }) => (
  <SpinnerContainer size={ size }>
    <Bounce />
    <Bounce delay={ -1 } />
  </SpinnerContainer>
)

export default Spinner
