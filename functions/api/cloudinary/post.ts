interface body {
  public_id: string
  version: string
  width: number
  height: number
  format: string
  created_at: string
  resource_type: string
  tags: Array<string>
  bytes: number
  type: string
  etag: string
  url: string
  secure_url: string
  signature: string
}
interface info {
  secure_url: string
  filename: string
}
const postImage = async (request, env) => {
  const data = await request.json()

  data.folder = 'website/article_image'
  data.timestamp = Date.now().toString()
  data.api_key = env.CLOUDINARY_API_KEY

  const cloudName = env.CLOUDINARY_CLOUD_NAME
  const resourceType = 'image'

  const signatureStr = new TextEncoder().encode(
    `${
      Object.entries(data)
        .flatMap(
          prop => (prop[0] !== 'file' && prop[0] !== 'api_key')
            ? `${prop[0]}=${prop[1]}`
            : [],
        ).sort().join('&')
    }${env.CLOUDINARY_API_SECRET}`,
  )

  const signatureBuff = await crypto.subtle.digest(
    {
      name: 'SHA-1',
    },
    signatureStr,
  )

  const signature = [...new Uint8Array(signatureBuff)].map(x => x.toString(16).padStart(2, '0')).join('')

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`

  const formData = new FormData()
  formData.append('file', data.file)
  formData.append('public_id', data.public_id)
  formData.append('folder', data.folder)
  formData.append('timestamp', data.timestamp)
  formData.append('api_key', data.api_key)
  formData.append('signature', signature)

  const init = {
    body: formData,
    method: 'POST',
  }
  const resp = await fetch(url, init)
  const body: body = await resp.json()
  const info: info = { secure_url: body.secure_url, filename: body.public_id }
  return JSON.stringify(info)
}

export async function onRequestPost({ request, env }) {
  // Contents of context object
  const info = await postImage(request, env)
  return new Response(info)
}
