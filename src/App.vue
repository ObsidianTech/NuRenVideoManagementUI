<template>
  <div id="app" class="container">
    <h1>{{ env }}</h1>
    <img class="logo" src='./assets/white.jpg' />
    <h1>Video Manager</h1>
    <router-view />
  </div>
</template>

<script>
import config from '../config.js';
export default {
  computed: {
    env() {
      return config.currentEnv();
    },
  },
  async mounted() {
    await this.$store.dispatch('getComments');
    await this.$store.dispatch('getContent');
  },
};
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}

.container {
  margin:0;
  text-align: center;
}

.logoContainer {
  width:100%;
  height: auto;
  margin-left: 50%;
  margin-right: 50%;
}

.logo {
  width: auto;
  height: 250px;
  display:block;
  margin:auto;
}
</style>
