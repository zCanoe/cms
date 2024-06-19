import { defineStore } from "pinia";
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuById,
} from "@/service/login/login";
import type { IAccount } from "../../../env";
import router from "@/router";

interface ILogin {
  token: string;
  userInfo: any;
  userMenu: any;
}

export const useLoginStore = defineStore("login", {
  state: (): ILogin => ({
    userInfo: null,
    token: "",
    userMenu: null,
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
      await router.push("/main");
    },
  },
  // pinia持久化
  persist: true,
});
