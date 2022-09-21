<script setup lang="ts">
const mobileView = ref(true)
const windowWidth = ref(0)

const getWidth = () => {
  windowWidth.value = window.innerWidth
  mobileView.value = windowWidth.value < 768
}
onMounted(() => {
  getWidth()
  window.addEventListener('resize', getWidth)
})

const show = ref(false)
</script>

<template>
  <div class="space">
    <header>
      <nav class="headerNav" text-xl mt-6>
        <RouterLink to="/" title="home">
          <img v-if="isDark" class="img" src="favicon-dark.svg" alt="home">
          <img v-else class="img" src="favicon.svg" alt="home">
        </RouterLink>
        <button v-if="mobileView" class="icon-btn mx-2 !outline-none" @click="show = !show">
          <div i-carbon:menu text-3xl />
        </button>
        <transition name="slide-fade">
          <div v-if="show || !mobileView" class="navWrapper">
            <RouterLink class="icon-btn mx-2" to="/about" title="about">
              about
            </RouterLink>
            <RouterLink class="icon-btn mx-2" to="/blog" title="blog">
              blog
            </RouterLink>
            <RouterLink class="icon-btn mx-2" to="/contact" title="contact">
              contact
            </RouterLink>
          </div>
        </transition>
      </nav>
    </header>
  </div>
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 8px;
  }
  .headerNav {
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0;
  }
  .img {
    height: 100%;
  }
  .navWrapper {
    position: fixed;
    right: 0;
    top: 0;
    margin-top: 100px;
    height: calc(100% - 100px);
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: -1;
  }
  .space {
    height: 100px;
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(25vw);
    opacity: 0;
  }
  @media screen and (min-Width:768px) {
    .navWrapper {
      position: initial;
      height: 100%;
      margin: 0;
      width: fit-content;
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      z-index: 0;
    }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: none;
    }
  }
</style>
