import { defineStore } from "pinia";
import {
  deletePageByid,
  deleteUserByid,
  editPageData,
  editUserData,
  newPageAdd,
  newUserAdd,
  postPageListData,
  postUsersListData,
} from "@/service/main/system/system";

interface ISystem {
  usersList: any[];
  usersCount: number;
  pageList: any[];
  pageCount: number;
}

export const useSystemStore = defineStore("system", {
  state: (): ISystem => ({
    usersCount: 0,
    usersList: [],
    pageCount: 0,
    pageList: [],
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
    async newUserDataAction(data: any) {
      await newUserAdd(data);
    },
    async editUserAction(id: number, data: any) {
      await editUserData(id, data);
    },

    async getPageList(data: any, pageName: string) {
      const res: any = await postPageListData(data, pageName);
      this.pageList = res.data.list;
      this.pageCount = res.data.totalCount;
    },
    async deletePageById(id: number, pageName: string) {
      await deletePageByid(id, pageName);
    },
    async newPageDataAction(data: any, pageName: string) {
      await newPageAdd(data, pageName);
    },
    async editPageAction(id: number, data: any, pageName: string) {
      await editPageData(id, data, pageName);
    },
  },
});
