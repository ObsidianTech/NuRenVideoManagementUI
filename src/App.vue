<template>
  <div id="app" class="container">
    <img class="logo" src='./assets/white.jpg' />
    <h1>Video Manager</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.$store.dispatch('getVideoKeys');
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
