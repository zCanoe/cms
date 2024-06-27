import { defineStore } from "pinia";
import { accountLoginRequest, getUserInfoById, getUserMenuById } from "@/service/login/login";
import type { IAccount } from "../../../env";
import router from "@/router";
import { mapMenuToRouter } from "@/utils/map-menus";
import useMainStore from "@/store/main/main";

interface ILogin {
  token: string;
  userInfo: any;
  userMenu: [];
}

export const useLoginStore = defineStore("login", {
  state: (): ILogin => ({
    userInfo: null,
    token: "",
    userMenu: [],
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const res: any = await accountLoginRequest(account);
      const { id, name } = res.data;
      this.token = res?.data?.token;

      const userInfoRes: any = await getUserInfoById(Number(id));
      this.userInfo = userInfoRes.data;

      const usrMenuRes: any = await getUserMenuById(this.userInfo.id);
      this.userMenu = usrMenuRes.data;

      // 根据所返回的菜单中的url去匹配生成动态路由
      mapMenuToRouter(this.userMenu).forEach((item) => router.addRoute("main", item));

      await router.push("/main");
    },
    reloadDynamicMenu() {
      // 由于刷新会重新走生命周期，没有去触发登陆，动态路由也就没有注册进去。重新暴露一个action供刷新调用
      if (this.token && this.userMenu && this.userInfo) {
        const mainStore = useMainStore();
        mainStore.getEntireRolesAndDepartmentsAction();
        mapMenuToRouter(this.userMenu).forEach((item) => router.addRoute("main", item));
      }
    },
  },
  // pinia持久化
  persist: true,
});
