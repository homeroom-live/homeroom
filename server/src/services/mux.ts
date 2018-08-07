import * as request from 'request-promise'

// Types

type StreamStatus = 'idle' | 'active'
type PlaybackPolicy = 'authenticated' | 'public' | 'private'

interface MuxStreamInput {
  playback_policy: PlaybackPolicy[]
  new_asset_settings: MuxAssetInput
}

interface MuxAssetInput {
  playback_policy: PlaybackPolicy[]
}

interface MuxStream {
  id: string
  createdAt: string
  status: StreamStatus
  stream_key: string
  active_asset_id: string
  playback_ids: MuxPlayback[]
}

interface MuxPlayback {
  policy: PlaybackPolicy
  id: string
}

// ENV check

if (!process.env.MUX_TOKEN_ID || !process.env.MUX_TOKEN_SECRET) {
  console.warn('Missing Mux credentials!')
} else if (!process.env.MUX_PLAYBACK_URL) {
  console.warn('Missing Mux playback url!')
}

// Functions

export async function createStreamInstance(
  body: MuxStreamInput,
): Promise<MuxStream> {
  return request('https://api.mux.com/video/v1/live-streams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: process.env.MUX_TOKEN_ID,
      password: process.env.MUX_TOKEN_SECRET,
    },
    body: JSON.stringify(body),
  })
    .then(res => JSON.parse(res))
    .then(res => res.data)
}
