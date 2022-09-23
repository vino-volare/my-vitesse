<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'TokinoVino',
  meta: [
    { property: 'og:url', content: 'https://vinovolare.com' },
    { property: 'og:type', content: 'website' },
    { name: 'description', content: 'アマチュアイラストレーター' },
    { property: 'og:site_name', content: 'TokinoVino' },
    { property: 'og:image', content: 'https://res.cloudinary.com/tokino/image/upload/v1653632269/website/static/TokinoVino_ogp_dgq6m5.jpg' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@vinovolare' },
    { name: 'twitter:creator', content: '@vinovolare' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
