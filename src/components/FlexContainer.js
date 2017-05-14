import glamorous from 'glamorous'

export default glamorous.div(
  { display: 'flex' },
  ({ align = 'flex-start', justify = 'flex-start' }) => ({
    alignItems: align,
    justifyContent: justify
  })
)
