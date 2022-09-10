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
    <RouterView />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Default Layout]
    </div>
  </main>
</template>
