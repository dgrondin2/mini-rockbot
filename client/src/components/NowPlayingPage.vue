<script setup>
  import { reactive, onMounted } from 'vue';
  import ComingUp from './ComingUp.vue';
  import nowPlayingData from '../../mock-now-playing.js';

  const nowPlaying = reactive({
    artist: "",
    title: "",
    imgSrc: ""
  });

  onMounted(() => {
    console.log(nowPlayingData);
    nowPlaying.artist = nowPlayingData.response.now_playing.artist;
    nowPlaying.title = nowPlayingData.response.now_playing.song;
    nowPlaying.imgSrc = nowPlayingData.response.now_playing.artwork_large;
  });
</script>

<template>
  <div class="now-playing-page">
    <div class="current-song">
      <img class="current-song_img" :src="nowPlaying.imgSrc" />
      <div class="current-song_details">
        <span class="artist">{{ nowPlaying.artist }}</span>
        <span>{{ nowPlaying.title }}</span>
      </div>
    </div>
    <ComingUp :songs="nowPlayingData.response.queue" />
  </div>
</template>

<style lang="scss">
  .now-playing-page {
    margin: 0 auto;
    width: 600px;
    .current-song {
      align-items: center;
      display: flex;
      margin: 0 auto;
      .current-song_details {
        flex: 1;
        margin-left: 30px;

        .artist {
          font-weight: bold;
        }
      }
      .current-song_img {
        border: 1px solid #555;
        border-radius: 230px;
        height: 250px;
        width: 250px;
      }
      span {
        display: block;
      }
    }
  }
</style>