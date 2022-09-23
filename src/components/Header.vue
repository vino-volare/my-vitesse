<script setup lang="ts">
const props = defineProps<{
  home: boolean
}>()
const { home } = toRefs(props)

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
          <img v-if="isDark" class="img" src="https://res.cloudinary.com/tokino/image/upload/v1663830940/website/static/favicon-dark_otzr85.svg" alt="home">
          <img v-else class="img" src="https://res.cloudinary.com/tokino/image/upload/v1663830940/website/static/favicon_qedts8.svg" alt="home">
        </RouterLink>
        <button v-if="mobileView" class="icon-btn mx-2 !outline-none" @click="show = !show">
          <div class="menu" i-carbon:menu text-3xl />
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
    <div v-if="home" class="home">
      <img class="headerImg" src="https://res.cloudinary.com/tokino/image/upload/v1653030180/website/static/%E3%81%B0%E3%81%A3%E3%81%A6%E3%82%93%E6%98%9F%E5%B7%9D_%E5%AE%8C%E6%88%90%E5%93%81_%E8%89%B2%E5%8F%8E%E5%B7%AEver_wgxmcn.png" alt="header">
      <h1 class="title">
        <span class="titleText" text-xl>TokinoVino</span>
        <img class="titleImg" src="https://res.cloudinary.com/tokino/image/upload/v1663896094/website/static/TokinoVino_word_only_skdbu8.svg" alt="TokinoVino">
      </h1>
    </div>
  </div>
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    padding: 8px;
    z-index: 1;
  }
  .headerNav {
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 0;
  }
  .headerNav::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(20px);
  }
  .img {
    height: 100%;
  }
  .menu {
    color: white !important;
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
    background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    backdrop-filter: blur(20px);
    color: white !important;
  }
  .space {
    padding-top: 100px;
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
  .home {
    position: relative;
    height: fit-content;
    display: block;
  }
  .headerImg {
    object-fit: cover;
    overflow: hidden;
    z-index: -1;
  }
  .title {
    padding-top: 16px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 100%;
  }
  .titleText {
    font-family: Formula1-Wide;
    color: black !important;
  }
  .titleImg {
    padding: 16px;
    padding-top: 4px;
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
      background: none;
    }
    .slide-fade-enter-active,
    .slide-fade-leave-active {
      transition: none;
    }
  }
</style>
