<script setup lang="ts">
</script>

<template>
  <footer>
    <nav text-xl mt-6>
      <RouterLink class="icon-btn mx-2" to="/" title="home">
        <img v-if="isDark" class="img" src="favicon-dark.svg" alt="home" width="24" height="24">
        <img v-else class="img" src="favicon.svg" alt="home" width="24" height="24">
      </RouterLink>

      <button class="icon-btn mx-2 !outline-none" title="toggle dark" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <RouterLink class="icon-btn mx-2" to="/about" title="about">
        <div i-carbon-dicom-overlay />
      </RouterLink>
      <RouterLink class="icon-btn mx-2" to="/image" title="image">
        <div i-carbon:image />
      </RouterLink>

      <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/vino-volare" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </nav>
  </footer>
</template>
