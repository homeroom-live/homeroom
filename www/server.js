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

  server.get('/class/:classId', (req, res) => {
    return app.render(req, res, '/class', {
      classId: req.params.classId,
    })
  })

  server.get('/classroom/:classroomId', (req, res) => {
    return app.render(req, res, '/classroom', {
      classroomId: req.params.classroomId,
    })
  })

  server.get('/dashboard/classes/new/:classroomId', (req, res) => {
    return app.render(req, res, '/dashboard/classes/new', {
      classroomId: req.params.classroomId,
    })
  })

  server.get('/dashboard/classes/class/:classId', (req, res) => {
    return app.render(req, res, '/dashboard/classes/class', {
      classId: req.params.classId,
    })
  })

  server.get('/dashboard/classrooms/classroom/:classroomId', (req, res) => {
    return app.render(req, res, '/dashboard/classrooms/classroom', {
      classroomId: req.params.classroomId,
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
