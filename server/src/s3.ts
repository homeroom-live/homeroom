import { S3 } from 'aws-sdk'
import { Upload } from 'apollo-upload-server'

const s3Client = new S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
})

export async function uploadFile(upload) {
  const { stream, filename, mimetype, encoding } = await upload
  const name = filename
  const secret = uuid()
  const contentType = mime.lookup(filename)

  // Upload to S3
  const response = await s3Client
    .upload({
      Key: secret,
      ACL: 'public-read',
      Body: stream,
      ContentType: contentType,
      Bucket: process.env.S3_BUCKET,
    })
    .promise()

  const url = response.Location
  const data = {
    name,
    secret,
    contentType,
    url,
  }

  return data
}
