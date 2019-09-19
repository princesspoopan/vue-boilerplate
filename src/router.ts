import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/pokemons"
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () =>
        import(
          /* webpackChunkName: 'pokemon' */ "./pokemons/views/pokemon-list.page.vue"
        )
    },
    {
      path: "/abilities",
      name: "abilities",
      component: () =>
        import(
          /* webpackChunkName: 'ability' */ "./abilities/views/ability-list.page.vue"
        )
    }
  ]
});
