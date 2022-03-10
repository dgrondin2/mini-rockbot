<script setup>
  import { reactive } from 'vue';
  import topArtistsData from '../../mock-top-artists.js';

  const artists = reactive({
    topArtists: topArtistsData.response
  });
</script>

<template>
  <div class="top-artists">
    <h2>Top Artists</h2>
    <ul>
      <li v-for="artist in artists.topArtists" :key="artist.artist_id">
        <img :src="artist.artwork_small" />
        <span>{{ artist.artist }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .top-artists {
    margin-bottom: 20px;
    li {
      align-items: center;
      display: flex;
      img {
        height: 80px;
        margin-right: 20px;
        width: 80px;
      }
      > span {
        flex: 1;
      }
    }
  }
</style>