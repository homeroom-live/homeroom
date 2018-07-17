import { upload } from 'graphql-middleware-apollo-upload-server'
import { S3 } from 'aws-sdk'
import * as mime from 'mime-types'
import { v4 as uuid } from 'uuid'

export interface IUpload {
  stream: string
  filename: string
  mimetype: string
  encoding: string
}

export interface IFile {
  name: string
  secret: string
  contentType: string
}

// Config

const s3Client = new S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
})

// Helpers

async function uploadFile(upload: IUpload): Promise<IFile> {
  const { stream, filename } = upload
  const secret = uuid()
  const contentType = mime.lookup(filename) || undefined

  const response = await s3Client
    .upload({
      Key: secret,
      ACL: 'private',
      Body: stream,
      ContentType: contentType,
      Bucket: process.env.S3_BUCKET,
    })
    .promise()

  return {
    name: filename,
    secret,
    contentType,
  }
}

// Exports

export const apolloUploadMiddleware = upload<IFile>({
  uploadHandler: uploadFile,
})
