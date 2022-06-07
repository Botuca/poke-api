import VueRouter from "vue-router";
import Application from "../views/Appication.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: `/`,
      component: Application,
      name: "application",
      children: [
        {
          path: "/pokemons",
          component: () => import("@/views/pokemons/index.vue"),
          name: "pokemons",
          props: true,
        },
        {
          path: "/pokemons/:id",
          component: () => import("@/views/pokemons/pokemon-details.vue"),
          name: "pokemon",
          props: true,
        },
        {
          path: "/berries",
          component: () => import("@/views/contact"),
          name: "berries",
          props: true,
        },
        {
          path: "/items",
          component: () => import("@/views/contact"),
          name: "items",
          props: true,
        },
        {
          path: "/locations",
          component: () => import("@/views/contact"),
          name: "locations",
          props: true,
        },
        {
          path: "/moves",
          component: () => import("@/views/contact"),
          name: "moves",
          props: true,
        },
        {
          path: "/contact",
          component: () => import("@/views/contact"),
          name: "contact",
          props: true,
        },
      ],
      redirect: "/pokemons",
    },
  ],
});

export default router;
