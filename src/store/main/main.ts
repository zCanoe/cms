import { defineStore } from "pinia";
import { getEntireDepartments, getEntireRoles } from "@/service/main/main";

interface IMain {
  entireRoles: { name: string; id: number }[];
  entireDepartments: { name: string; id: number }[];
}

const useMainStore = defineStore("main", {
  state: () => ({
    entireRoles: [],
    entireDepartments: [],
  }),
  actions: {
    async getEntireRolesAndDepartmentsAction() {
      const ed: any = await getEntireDepartments();
      const er: any = await getEntireRoles();

      this.entireRoles = er?.data?.list ?? [];
      this.entireDepartments = ed?.data?.list ?? [];
    },
  },
});

export default useMainStore;
