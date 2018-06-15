import { S3, AWSError } from 'aws-sdk'
import * as mime from 'mime-types'
import { v4 as uuid } from 'uuid'
import { PromiseResult } from 'aws-sdk/lib/request'

export interface IUpload {
  stream: string
  filename: string
  mimetype: string
  encoding: string
}

export interface IFile {
  secret: string
  contentType: string
  url: string
}

// Config

const s3Client = new S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
})

// Exports

export async function uploadFile(upload: Promise<IUpload>): Promise<IFile> {
  const { stream, filename, mimetype, encoding } = await upload
  const secret = uuid()
  const contentType = mime.lookup(filename) || undefined

  const response = await s3Client
    .upload({
      Key: secret,
      ACL: 'public-read',
      Body: stream,
      ContentType: contentType,
      Bucket: process.env.S3_BUCKET,
    })
    .promise()

  return {
    secret,
    contentType,
    url: response.Location,
  }
}

export async function removeFile(
  file: IFile,
): Promise<PromiseResult<S3.DeleteObjectOutput, AWSError>> {
  return s3Client
    .deleteObject({
      Key: file.secret,
      Bucket: process.env.S3_BUCKET,
    })
    .promise()
}
