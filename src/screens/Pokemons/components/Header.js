import glamorous from 'glamorous'

export default glamorous.header({
  boxShadow: '0px 0px 1px 1px #ddd',
  backgroundColor: 'white',
  padding: '0.75rem 0',
  marginBottom: '1rem',
  position: 'relative',

  ' svg': {
    display: 'inline-block',
    verticalAlign: 'middle'
  },

  ' h1': {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '0.75rem',
    marginTop: '0',
    marginBottom: '0'
  }
})
