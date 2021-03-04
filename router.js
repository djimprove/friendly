import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/layout/BaseLayout.vue";
// import { auth } from "../firebase";
const routes = [
  {
    path: "/",
    name: "BaseLayout",
    component: BaseLayout,
    redirect: "onlinepeaple",
    children: [
      {
        path: "recentchat",
        name: "RecentChat",
        component: () =>
          import(/* webpackChunkName: "online" */ "./src/views/RecentChat.vue"),
      },
      {
        path: "onlinepeaple",
        name: "OnlinePeaple",
        component: () =>
          import(
            /* webpackChunkName: "online" */ "./src/views/OnlinePeaple.vue"
          ),
      },

      {
        path: "friends",
        name: "Friends",
        component: () =>
          import(/* webpackChunkName: "online" */ "./src/views/Friends.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "online" */ "./src/views/Profile.vue"),
      },
    ],
  },
  {
    path: "/chatview",
    name: "ChatView",
    component: () =>
      import(/* webpackChunkName: "online" */ "./src/views/ChatView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "online" */ "@/auth/Login.vue"),
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
