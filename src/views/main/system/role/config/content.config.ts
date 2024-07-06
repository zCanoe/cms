import type { contentConfig } from "@/global/constant";

export const contentConfigs: contentConfig = {
  pageName: "role",
  title: "角色列表",
  newBtn: "新建角色",
  tableConfig: [
    { type: "selection", label: "选择", width: "80px" },
    { type: "index", label: "序号", width: "80px" },
    { label: "角色名称", prop: "name", width: "150px" },
    { label: "权限介绍", prop: "intro", width: "180px" },
    { label: "创建时间", prop: "createAt", slotName: "createAt" },
    { label: "更新时间", prop: "updateAt", slotName: "updateAt" },
    { type: "handle", label: "操作", width: "150px" },
  ],
};
