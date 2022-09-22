<script setup lang="ts">
</script>

<template>
  <nav class="nav" text-xl mt-6>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://twitter.com/VinoVolare" target="_blank" title="Twitter">
      <img
        v-if="isDark"
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663833394/website/static/twitter/Twitter_white_nudzwn.svg"
        alt="twitter"
      >
      <img
        v-else
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663833394/website/static/twitter/Twitter_black_leyunm.svg"
        alt="twitter"
      >
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://www.pixiv.net/users/24802125" target="_blank" title="Pixiv">
      <img
        v-if="isDark"
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832942/website/static/pixiv/pixiv_icon_white_rsuw4f.svg"
        alt="pixiv"
      >
      <img
        v-else
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832942/website/static/pixiv/pixiv_icon_black_iruzre.svg"
        alt="pixiv"
      >
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://poipiku.com/6268090/" target="_blank" title="Poipiku">
      <img
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832063/website/static/poipiku/poipiku_icon_512x512_2_imri7l.png"
        alt="poipiku"
      >
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://www.twitch.tv/tokino_ch" target="_blank" title="Twitch">
      <img
        v-if="isDark"
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663833065/website/static/twitch/TwitchGlitchWhite_ilxkx9.svg"
        alt="twitch"
      >
      <img
        v-else
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663833065/website/static/twitch/TwitchGlitchBlack_zrns1z.svg"
        alt="twitch"
      >
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://www.youtube.com/channel/UCP-bXu2xtY2GqDdAKk_ys4w" target="_blank" title="Youtube">
      <img
        v-if="isDark"
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832607/website/static/youtube/yt_icon_white_gbdkn5.svg"
        alt="youtube"
      >
      <img
        v-else
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832600/website/static/youtube/yt_icon_black_yibxyo.svg"
        alt="youtube"
      >
    </a>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/vino-volare" target="_blank" title="GitHub">
      <img
        v-if="isDark"
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832755/website/static/github/GitHub-Mark-white_jwqz0a.svg"
        alt="github"
      >
      <img
        v-else
        class="img"
        src="https://res.cloudinary.com/tokino/image/upload/v1663832650/website/static/github/GitHub-Mark-black_oqryb1.svg"
        alt="github"
      >
    </a>
  </nav>
</template>

<style scoped>
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .img {
    width: 50px;
    height: 50px;
  }
</style>
