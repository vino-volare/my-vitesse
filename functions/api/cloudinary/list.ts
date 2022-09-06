interface body {
  total_count: number
  time: number
  aggregations: object
  next_cursor: string
  resources: Array<resource>
}
interface resource {
  asset_id: string
  public_id: string
  folder: string
  filename: string
  format: string
  version: number
  resource_type: string
  type: string
  created_at: string
  uploaded_at: string
  bytes: number
  backup_bytes: number
  width: number
  height: number
  aspect_ratio: number
  pixels: number
  access_control: Array<object>
  context: object
  image_analysis: object
  url: string
  secure_url: string
  status: string
  access_mode: string
}
interface info {
  filename: string
  secure_url: string
}
const postBody = {
  expression: 'folder=website/article_image',
  max_results: 30,
}
const getImage = async (key, secret, cloudName) => {
  const init = {
    body: JSON.stringify(postBody),
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${key}:${secret}`)}`,
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`
  const resp = await fetch(url, init)
  const body: body = await resp.json()
  const resource = body.resources
  const info: info[] = resource.map((data: resource) => {
    const extract: info = { filename: data.filename, secure_url: data.secure_url }
    return extract
  })
  return JSON.stringify(info)
}

export async function onRequest({ env }) {
  // Contents of context object
  const info = await getImage(env.CLOUDINARY_API_KEY, env.CLOUDINARY_API_SECRET, env.CLOUDINARY_CLOUD_NAME)
  return new Response(info)
}
