const express = require('express')
const compression = require('compression')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Config

  server.use(compression())

  // Routes
  server.get('/profile/lessons/new', (req, res) => {
    return app.render(req, res, '/profile/lessons/new')
  })

  server.get('/profile/lessons/:lessonId', (req, res) => {
    return app.render(req, res, '/profile/lessons/live', {
      lessonId: req.params.lessonId,
    })
  })

  server.get('/profile', (req, res) => {
    return app.render(req, res, '/profile')
  })

  server.get('/profile/lessons', (req, res) => {
    return app.render(req, res, '/profile/lessons')
  })

  server.get('/profile/courses', (req, res) => {
    return app.render(req, res, '/profile/courses')
  })

  server.get('/:username/:lessonId', (req, res) => {
    return app.render(req, res, '/live', {
      username: req.params.username,
      lessonId: req.params.lessonId,
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  // Listen

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
