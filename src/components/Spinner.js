import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'

const bounceAnimation = css.keyframes({
  '0%, 100%': { transform: 'scale(0)' },
  '50%': { transform: 'scale(1)' }
})


const SpinnerContainer = glamorous.div(
  {
    position: 'relative',
    margin: '150px auto',
  },
  ({ size }) => ({
    width: size,
    height: size
  })
)

const Bounce = glamorous.div(
  {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'rgb(139, 90, 139)',
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    animation: `${bounceAnimation} 2s infinite ease-in-out`
  },
  ({ delay = 0 }) => ({
    animationDelay: `${delay}s`
  })
)

const Spinner = ({ size = 40 }) => (
  <SpinnerContainer size={ size }>
    <Bounce />
    <Bounce delay={ -1 } />
  </SpinnerContainer>
)

export default Spinner
