import React from 'react'
import Theme from './Theme'
import glamorous from 'glamorous'

const Label = glamorous.span(
  {
    padding: '0.3rem 0.8rem',
    borderRadius: '2px',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    marginRight: '5px',
  },
  (_, { primary, text }) => ({
    background: primary,
    color: text
  })
)

const TypeLabel = ({ type }) => (
  <Theme type={ type }>
    <Label>{ type }</Label>
  </Theme>
)

export default TypeLabel
