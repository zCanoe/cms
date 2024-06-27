import { defineStore } from "pinia";
import { deleteUserByid, postUsersListData } from "@/service/main/system/system";

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
    async getUserList(data: any) {
      const res: any = await postUsersListData(data);
      this.usersList = res.data.list;
      this.usersCount = res.data.totalCount;
    },
    async deleteUserById(id: number, index: number) {
      await deleteUserByid(id);
    },
  },
});
