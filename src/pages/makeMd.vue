<script setup lang="ts">
import { saveAs } from 'file-saver'

const filename = ref('')
const string = ref('')
const saveMd = () => {
  if (filename.value !== '') {
    const blob = new Blob([string.value], { type: 'text/markdown' })
    saveAs(blob, `${filename.value}.md`)
  }
}
</script>

<template>
  <div>
    <input v-model="filename" type="text">
    <textarea v-model="string" />
    <button btn m-3 text-sm @click="saveMd">
      save
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
