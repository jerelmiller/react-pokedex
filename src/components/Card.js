import glamorous from 'glamorous'

const Card = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  flex: '0 24%',
  background: '#fff',
  boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.25)',
  margin: '0.5%',
  borderRadius: '3px',
  transition: 'all 0.15s ease-out',

  ':hover': {
    transform: 'scale(1.03)',
    cursor: 'pointer',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)'
  }
})

export default Card
