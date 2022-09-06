<script setup lang="ts">
import { saveAs } from 'file-saver'
interface obj {
  [prop: string]: any
}

const header: obj = {
  'CF-Access-Client-Id': import.meta.env.VITE_CF_ACCESS_CLIENT_ID,
  'CF-Access-Client-Secret': import.meta.env.VITE_CF_ACCESS_CLIENT_SECRET,
}

const filename = ref('')
const string = ref('')
const saveMd = () => {
  if (filename.value !== '') {
    const blob = new Blob([string.value], { type: 'text/markdown' })
    saveAs(blob, `${filename.value}.md`)
  }
}
const mdEditor = ref(null)
const index = ref(0)
const insert = (element: string) => {
  if (mdEditor.value !== null) {
    index.value = mdEditor.value.selectionStart
    let correctText: string
    const escape = /\N|\n| |\u00A0|\t/
    if (escape.test(string.value[index.value - 1]) && escape.test(string.value[index.value]))
      correctText = `${element}`
    else if (escape.test(string.value[index.value - 1]) || (index.value === 0))
      correctText = `${element}\u00A0`
    else
      correctText = `\u00A0${element}\u00A0`
    string.value = `${string.value.substring(0, index.value)}${correctText}${string.value.substring(index.value)}`
  }
}
const isImage = ref(false)
const toggleImage = () => {
  isImage.value = !isImage.value
}
const putImage = (alt: string, url: string) => {
  const text = `![${alt}](${url})`
  insert(text)
  toggleImage()
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
const base64Image = ref<string>('')
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
    <p>{{ base64Image }}</p>
    <input v-model="filename" type="text">
    <textarea ref="mdEditor" v-model="string" />
    <button btn m-3 text-sm @click="saveMd">
      save
    </button>
    <button btn m-3 text-sm @click="toggleImage">
      insert
    </button>
    <ul v-if="isImage" class="imageList">
      <label id="fileWrapper" class="imageWrapper">
        <input type="file" @change="uploadImage">新規
      </label>
      <li v-for="(detail, i) in jsonBody" :key="i" class="imageWrapper">
        <img :src="detail.secure_url" :alt="detail.filename" class="image" @click="putImage(detail.filename, detail.secure_url)">
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
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
    background-color: aqua;
    color: black;
  }
  #fileWrapper > label {
    display: none;
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
  layout: default
</route>
