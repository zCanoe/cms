import { defineStore } from "pinia";
import { postUsersListData } from "@/service/main/system/system";

interface ISystem {
  usersList: any[];
  usersCount: number;
}

export const useSystemStore = defineStore("system", {
  state: (): ISystem => ({
    usersCount: 0,
    usersList: [],
  }),
  actions: {
    async getUserList() {
      const res: any = await postUsersListData();
      this.usersList = res.data.list;
      this.usersCount = res.data.totalCount;
    },
  },
});
