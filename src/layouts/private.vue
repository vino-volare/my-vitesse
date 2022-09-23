<script setup lang="ts">
useHead({
  meta: [
    { name: 'robots', content: 'noindex,nofollow' },
  ],
})
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <Footer />
  </main>
</template>

<style>
  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
