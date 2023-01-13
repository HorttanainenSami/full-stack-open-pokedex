const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

/* eslint-disable*/
app.listen(PORT, () => {
  console.log('server started on port 5000')
})
app.get('/health', (_req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})
app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

/* eslint-enable*/
