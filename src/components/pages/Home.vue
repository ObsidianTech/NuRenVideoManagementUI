<template>
    <div class="container">
      <div id="nav" class="vertical-menu">
        <router-link to="/projects"> View Projects</router-link>
        <router-link to="/new">New Project</router-link>
        <router-link to="/comments"> View Messages</router-link>
      </div>
    </div>
</template>

<script>
import Events from '../modules/Events';
export default {
    name: 'home',
};
</script>

<style scoped>
#nav a {
  text-decoration: none;
  text-decoration-color: black;
  font-size: 35px;
  color: #2c3e50;
  padding:25px;
}

.container {
  display: flex;
}

.column {
  flex: 50%;
  margin: 35px;
}

.vertical-menu {
  width: 100%;
}

.vertical-menu a{
  display: block;
}
</style>


