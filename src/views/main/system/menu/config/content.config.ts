import type { contentConfig } from "@/global/constant";

export const contentConfigs: contentConfig = {
  pageName: "menu",
  title: "菜单列表",
  newBtn: "新建菜单",
  tableConfig: [
    { label: "菜单名称", prop: "name", width: "180px" },
    { label: "级别", prop: "type", width: "120px" },
    { label: "菜单url", prop: "url", width: "150px" },
    { label: "菜单icon", prop: "icon", width: "200px" },
    { label: "排序", prop: "sort", width: "120px" },
    { label: "权限", prop: "permission", width: "150px" },
    { type: "timer", label: "创建时间", prop: "createAt", slotName: "createAt" },
    { type: "timer", label: "更新时间", prop: "updateAt", slotName: "updateAt" },
    { type: "handle", label: "操作", width: "150px" },
  ],
  childrenTree: {
    rowKey: "id",
    treeProps: {
      children: "children",
      hasChildren: true,
    },
  },
};
