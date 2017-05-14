import Theme from 'components/Theme'
import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'

const ballSize = 2

const ThemedHeader = glamorous.header(
  {
    position: 'relative',
    height: '4.5rem',
    '&::after, &::before': {
      content: '',
      borderRadius: '50%',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '&::after': {
      backgroundColor: '#f6f6f6',
      width: `${ballSize - 0.5}rem`,
      height: `${ballSize - 0.5}rem`,
      bottom: `-${(ballSize - 0.5) / 2}rem`
    },
    '&::before': {
      width: `${ballSize}rem`,
      height: `${ballSize}rem`,
      bottom: `-${ballSize / 2}rem`,
    },
  },
  (_, { primary, text }) => ({
    color: text,
    background: primary,
    '&::before': {
      backgroundColor: primary
    }
  })
)

const CloseButton = glamorous(Link)(
  {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    fontWeight: '300',
    lineHeight: '1rem',
    display: 'block',
    fontSize: '3rem',
    opacity: '0.5'
  },
  (_, { text }) => ({
    color: text
  })
)

const Header = ({ children, pokemonType }) => (
  <Theme type={ pokemonType }>
    <ThemedHeader>
      <CloseButton to='/pokemon'>
        &times;
      </CloseButton>
    </ThemedHeader>
  </Theme>
)

export default Header
