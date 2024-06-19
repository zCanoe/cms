import { createRouter, createWebHashHistory } from "vue-router";
import { useLoginStore } from "@/store/login/login";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/main/main.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/views/not-found/not-found.vue"),
    },
  ],
});

// 导航守卫
router.beforeEach((to, from) => {
  if (to.path === "/main" && !useLoginStore().token) {
    return "/login";
  }
});
export default router;
