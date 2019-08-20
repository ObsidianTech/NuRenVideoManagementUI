import Home from './components/pages/Home';
import Vue from 'vue';
import Router from 'vue-router';
import NewProject from './components/modules/NewProject.vue';
import ViewProjects from './components/modules/ViewProjects.vue';
import ViewCatalog from './components/modules/ViewCatalog.vue';
import Preview from './components/modules/Preview.vue';

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

    {
      path: '/catalog',
      name: 'viewCatalog',
      component: ViewCatalog,
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
      props: true,
    },
  ]
})
