import Home from './components/pages/Home';
import Vue from 'vue';
import Router from 'vue-router';
import NewProject from './components/modules/NewProject.vue';
import ViewProjects from './components/modules/ViewProjects.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/new',
      name: 'newProject',
      component: NewProject,
    },

    {
      path: '/projects',
      name: 'viewProjects',
      component: ViewProjects,
    },
  ]
})
