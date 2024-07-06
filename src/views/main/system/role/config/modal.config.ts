import type { modalConfig } from "@/global/constant";

export const modalConfigs: modalConfig = {
  pageName: "role",
  title: "角色",
  formConfig: [
    {
      label: "角色名称",
      prop: "name",
      placeholder: "请输入角色名称",
    },
    {
      label: "权限介绍",
      prop: "intro",
      placeholder: "请输入权限介绍",
    },
    {
      label: "",
      placeholder: "",
      prop: "menuList",
      slotName: "menuList",
    },
  ],
};
