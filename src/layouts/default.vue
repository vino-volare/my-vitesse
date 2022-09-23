<script setup lang="ts">
import { Cloudinary } from 'cloudinary-core'
const cl = Cloudinary.new({ cloud_name: 'tokino', secure: true })
const responsive = () => {
  cl.responsive()
}
onMounted(responsive)
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <Header :home="false" />
    <RouterView />
    <Footer />
  </main>
</template>
