import glamorous from 'glamorous'

const CardInfo = glamorous.div({
  marginTop: 'auto',
  padding: '1rem',
  borderBottomLeftRadius: '3px',
  borderBottomRightRadius: '3px'
}, ({ theme }) => ({
  background: theme.primary,
  color: theme.text
}))

export default CardInfo
