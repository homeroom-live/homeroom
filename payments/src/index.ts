import * as express from 'express'

// Setup ---------------------------------------------------------------------

const app = express()

// Routes --------------------------------------------------------------------

app.get('/subscribe', (req, res) => {
  res.send('subscribe')
})

// Start ---------------------------------------------------------------------

app.listen(process.env.PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Proxy running on http://localhost:${process.env.PORT}`)
})
