import getConfig from 'next/config'
import * as qs from 'qs'
import auth0 from 'auth0-js'

// Lib

import { redirect } from 'lib/redirect'

// Config

const { publicRuntimeConfig } = getConfig()

const auth0Client = new auth0.WebAuth({
  domain: publicRuntimeConfig.auth0Domain,
  clientID: publicRuntimeConfig.auth0ClientId,
  redirectUri: publicRuntimeConfig.auth0RedirectUrl,
  responseType: 'token id_token',
  scope: 'openid profile email',
})

// Exports

export const buildAuthorizeURL = options =>
  auth0Client.client.buildAuthorizeUrl(options)

export const parseHash = ({ hash }) => {
  const normalizedHash = hash.replace('#', '')
  const parsedHash = qs.parse(normalizedHash)
  return parsedHash.id_token
}

export const facebookLogin = () => {
  auth0Client.authorize({ connection: 'facebook' })
}

export const googleLogin = () => {
  auth0Client.authorize({ connection: 'google' })
}

export const databaseLogin = ({ email, password }) => {
  auth0Client.login(
    {
      realm: 'Username-Password-Authentication',
      username: email,
      password,
    },
    (err, data) => {
      console.log(err, data)
    },
  )
}

// export const parseHash = options =>
//   new Promise((resolve, reject) => {
//     auth0Client.parseHash(options, (err, res) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(res)
//       }
//     })
//   })
