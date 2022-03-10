<script setup>
  /* eslint-disable */
  defineProps({
    songs: Array
  });
  /* eslint-enable */
  function like(song) {
    song.likes++;
  }
  function dislike(song) {
    song.dislikes++;
  }
</script>

<template>
  <div>
    <h2>Coming Up</h2>
    <ol>
      <li v-for="song in this.songs" :key="song.id">
        <div class="song-details">
          <span class="song-details_artist">{{ song.artist }}</span>
          <span class="song-details_title">{{ song.song }}</span>
        </div>
        <div class="likes">
          <button class="likes_add-dislike" @click="dislike(song)">-</button>
          <span class="likes_total">{{ song.likes - song.dislikes }}</span>
          <button class="likes_add-like" @click="like(song)">+</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
  ol > li {
      display: flex;
      margin-bottom: 20px;
    }
  .song-details {
    flex: 1;

    > span {
      display: block;
    }
  }
  .likes {
    width: 140px;

    > button {
      background: none;
      height: 40px;
      width: 40px;

      &.likes_add-dislike {
        color: red;
      }
      &.likes_add-like {
        color: green;
      }
    }
    .likes_total {
      margin: 0 15px;
    }
  }
</style>