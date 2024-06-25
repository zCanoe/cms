import { createRouter, createWebHashHistory } from "vue-router";
import { useLoginStore } from "@/store/login/login";
import type { RouteRecordRaw } from "vue-router";
import { firstMenu } from "@/utils/map-menus";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("@/views/main/main.vue"),
      children: [],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/not-found/not-found.vue"),
    },
  ],
});

// 导航守卫
router.beforeEach((to, from) => {
  console.log(Boolean(!useLoginStore().token));
  if (to.path.startsWith("/main") && !useLoginStore().token) {
    return "/login";
  }
  if (to.path === "/main") return firstMenu;
});
export default router;
