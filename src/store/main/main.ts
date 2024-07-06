import { defineStore } from "pinia";
import { getEntireDepartments, getEntireMenus, getEntireRoles } from "@/service/main/main";

interface IMain {
  entireRoles: { name: string; id: number }[];
  entireDepartments: { name: string; id: number }[];
  entireMenus: {}[];
}

const useMainStore = defineStore("main", {
  state: () => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: [],
  }),
  actions: {
    async getEntireRolesAndDepartmentsAction() {
      const ed: any = await getEntireDepartments();
      const er: any = await getEntireRoles();
      const em: any = await getEntireMenus();

      this.entireRoles = er?.data?.list ?? [];
      this.entireDepartments = ed?.data?.list ?? [];
      this.entireMenus = em?.data?.list ?? [];
    },
  },
});

export default useMainStore;
