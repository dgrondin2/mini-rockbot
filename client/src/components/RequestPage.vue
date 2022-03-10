<script setup>
  import { reactive } from "vue";
  import TopArtists from "./TopArtists.vue";
  import searchResults from "../../mock-search-results.js"

  const search = reactive({ 
    results: [] ,
    query: ""
  });

  function runSearch(query) {
    if (query === "") {
      search.results = [];
    }
    else {
      search.results = searchResults.response;
    }
  }
</script>

<template>
  <div class="request-page">
    <TopArtists v-if="search.results.length === 0" />

    <div v-if="search.results.length > 0" class="search-results">
      <h2>Showing results for "{{ search.query }}"</h2>
      <ul>
        <li v-for="result in search.results" :key="result.artist_id">
          <img :src="result.artwork_small" />
          <span class="">{{ result.artist }}</span>
        </li>
      </ul>
    </div>
    
    <div class="search-controls">
      <input type="text" v-model="search.query" placeholder="search" />
      <button type="submit" @click="runSearch(search.query)">Search</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .request-page {
    margin: 0 auto;
    width: 600px;

    .search-results {
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        align-items: center;
        border: 1px solid #555;
        display: flex;

        span {
          flex: 1;
        }
        img {
          height: 80px;
          margin-right: 20px;
          width: 80px;
        }
      }
    }
  }
  .search-controls {
    display: flex;
    > input {
      flex: 1;
      padding-left: 10px;
      height: 40px;
    }
  }
</style>