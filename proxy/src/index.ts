import * as express from 'express'
import * as jwt from 'express-jwt'
import * as jwks from 'jwks-rsa'
import * as sharp from 'sharp'
import * as AWS from 'aws-sdk'

// Middleware ----------------------------------------------------------------

const auth0 = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  issuer: process.env.AUTH0_TOKEN_ISSUER,
  algorithms: ['RS256'],
})

// Setup ---------------------------------------------------------------------

const client = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
})

const app = express()

// app.use(auth0)

// Routes --------------------------------------------------------------------

app.get('/file/:secret', (req, res) => {
  const { secret } = req.params

  const stream = client.getObject({
    Bucket: process.env.S3_BUCKET,
    Key: secret,
  })

  stream.createReadStream().pipe(res)
})

app.get('/picture/:secret', (req, res) => {
  const { secret } = req.params

  const stream = client.getObject({
    Bucket: process.env.S3_BUCKET,
    Key: secret,
  })

  const convert = sharp().png()

  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Cache-Control', 'max-age=31536000')

  stream
    .createReadStream()
    .pipe(convert)
    .pipe(res)
})

app.get('/picture/:secret/:size', (req, res) => {
  const { secret, size } = req.params

  let [width, height] = size.split('x')

  if (!width && !height) {
    return res.sendStatus(400)
  } else if (width && !height) {
    width = parseInt(width, 10)
    height = null
  } else if (!width && height) {
    width = null
    height = parseInt(height, 10)
  } else {
    width = parseInt(width, 10)
    height = parseInt(height, 10)
  }

  const stream = client.getObject({
    Bucket: process.env.S3_BUCKET,
    Key: secret,
  })

  const resize = sharp()
    .resize(width)
    .max()
    .png()

  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Cache-Control', 'max-age=31536000')

  stream
    .createReadStream()
    .pipe(resize)
    .pipe(res)
})

// Start ---------------------------------------------------------------------

app.listen(process.env.PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Proxy running on http://localhost:${process.env.PORT}`)
})
