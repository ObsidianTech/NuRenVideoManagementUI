<template>
    <div>
        <div>
          <div id="nav">
            <router-link to="/projects"> View Projects</router-link>
            <router-link to="/new">New Project</router-link>
            <router-link to="/catalog"> View Catalog</router-link>
          </div>
        </div>
        <div>
          <Events />
        </div>
    </div>
</template>

<script>
import Events from '../modules/Events';
export default {
    name: 'home',
    components: {
        Events,
    }
}
</script>

<style scoped>
#nav a {
  text-decoration: none;
  text-decoration-color: black;
  font-size: 35px;
  color: #2c3e50;
  padding:25px;
}
</style>


