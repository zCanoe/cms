import type { searchConfig } from "@/global/constant";

export const searchConfigs: searchConfig = [
  {
    pageName: "role",
    name: "name",
    prop: "name",
    type: "input",
    label: "角色名称",
  },
  {
    pageName: "role",
    name: "intro",
    prop: "intro",
    type: "input",
    label: "权限介绍",
  },
  {
    pageName: "role",
    type: "data-picker",
    prop: "createAt",
    name: "createAt",
    label: "创建时间",
  },
];
