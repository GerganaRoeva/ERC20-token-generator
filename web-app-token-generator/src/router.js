import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import CreateToken from "./views/CreateToken.vue";
import VotingPage from "./views/VotingPage.vue";
import CreateElection from "./views/CreateElection.vue";


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
    component: VotingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
