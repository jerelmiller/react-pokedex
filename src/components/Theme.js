import React from 'react'
import themes from 'lib/themes'
import { ThemeProvider } from 'glamorous'

const defaultTheme = {
  primary: '#fff',
  text: '#666'
}

export const themeFromType = (type = '') =>
  themes[type.toLowerCase()] || defaultTheme

const Theme = ({ children, type }) => (
  <ThemeProvider theme={ themeFromType(type) }>
    { children }
  </ThemeProvider>
)

export default Theme
