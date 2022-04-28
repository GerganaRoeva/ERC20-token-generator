import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import CreateToken from "./views/CreateToken.vue";
import VotingHomePage from "./views/VotingHomePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create-token",
    name: "Create token",
    component: CreateToken,
  },
  {
    path: "/create-election",
    name: "Create election",
    component: CreateElection,
  },
  {
    path: "/vote",
    name: "Vote",
    component: VotingHomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
