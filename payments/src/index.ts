import * as express from 'express'

// Setup ---------------------------------------------------------------------

const app = express()

// Routes --------------------------------------------------------------------

app.get('*', (req, res) => {
  res.send('Homeroom payments server.')
})

app.post('/subscriptions', (req, res) => {
  res.send('subscribe')
})

// Start ---------------------------------------------------------------------

app.listen(process.env.PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Proxy running on http://localhost:${process.env.PORT}`)
})
