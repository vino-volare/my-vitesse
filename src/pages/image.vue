<script setup lang="ts">
interface obj {
  [prop: string]: any
}

const header: obj = {
  'CF-Access-Client-Id': import.meta.env.VITE_CF_ACCESS_CLIENT_ID,
  'CF-Access-Client-Secret': import.meta.env.VITE_CF_ACCESS_CLIENT_SECRET,
}

const copyImgUrl = (url: string) => {
  const index = url.indexOf('upload/') + 7
  const before = url.substring(0, index)
  const after = url.substring(index)
  navigator.clipboard.writeText(`${before}c_scale,w_auto/dpr_auto/${after}`)
}
interface info {
  secure_url: string
  filename: string
}
const jsonBody: info[] = reactive([])
const getImage = async () => {
  const url = '/api/cloudinary/list'
  const init = {
    headers: header,
  }
  const res = await fetch(url, init)
  const data: info[] = await res.json()
  data.map(obj => jsonBody.push(obj))
}
onMounted(getImage)

interface body {
  public_id: string
  file: string
}
const uploadImage = async (e: any) => {
  const url = '/api/cloudinary/post'
  const postHeader = header
  postHeader['content-type'] = 'application/json'

  const reader = new FileReader()
  const file = e.target.files[0]
  if (file)
    reader.readAsDataURL(file)
  reader.onload = async () => {
    const body: body = {
      public_id: file.name.substring(0, file.name.indexOf('.')),
      file: String(reader.result),
    }
    const init = {
      method: 'POST',
      headers: postHeader,
      body: JSON.stringify(body),
    }
    const res = await fetch(url, init)
    const data: info = await res.json()
    data.filename = data.filename.substring(data.filename.lastIndexOf('/') + 1)
    jsonBody.unshift(data)
  }
}
</script>

<template>
  <div class="wrapper">
    <ul class="imageList">
      <label id="fileWrapper" class="imageWrapper">
        <input type="file" @change="uploadImage"><div i-carbon:folder-add />
      </label>
      <li v-for="(detail, i) in jsonBody" :key="i" class="imageWrapper">
        <img :src="detail.secure_url" :alt="detail.filename" class="image" @click="copyImgUrl(detail.secure_url)">
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .wrapper {
    min-height: 100%;
    flex-grow: 1;
  }
  .imageList {
    display: flex;
    flex-wrap: wrap;
  }
  .imageWrapper {
    display: block;
    position: relative;
    overflow: hidden;
    margin: 10px 5px;
    width: 20vw;
    height: 30vw;
    cursor: pointer;
  }
  #fileWrapper {
    background-color: rgb(66, 66, 66);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #fileWrapper > input {
    display: none;
  }
  #fileWrapper > div {
    position: absolute;
    width: 50%;
    height: 100%;
  }
  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<route lang="yaml">
meta:
  layout: private
</route>
