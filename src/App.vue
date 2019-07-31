<template>
  <div id="app">
    <p>Test</p>
  </div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('getUploadEvents');
    await this.$store.dispatch('getVideoKeys');
  },
};
</script>

<style>
#app {
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
