<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [private Layout]
    </div>
  </main>
</template>

<style>
  main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
