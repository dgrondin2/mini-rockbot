<script setup>
  
</script>

<template>
  <div>
    <header>
      <h1>mini rockbot</h1>
    </header>
    
    <main>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
      <nav class="tabs">
        <router-link to="/">Now Playing</router-link>
        <router-link to="/request">Request</router-link>
      </nav>
    </main>
  </div>
</template>

<style lang="scss">
  /* global styles */
  body {
    font-family: helvetica, arial, sans-serif;
    font-size: 20px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul > li {
    list-style-type: none;
  }
  header {
    background-color: #4971d1;
    color: #fff;
    text-align: center;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  input, button {
    font-size: 18px;
  }

  .tabs {
    align-items: center;
    display: flex;
    height: 50px;
    margin: 0 auto;
    margin-top: 40px;
    width: 600px;
    > a {
      border: 1px solid #555;
      display: block;
      flex: 1;
      padding: 30px;
      text-align: center;
    }
  }

  /* route transitions */
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .route-enter-active {
    transition: all 0.3s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
</style>
