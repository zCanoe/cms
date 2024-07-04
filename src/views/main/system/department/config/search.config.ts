import type { searchConfig, contentConfig } from "@/global/constant";

const searchConfigs: searchConfig = [
  {
    pageName: "department",
    name: "name",
    prop: "name",
    type: "input",
    label: "部门名称",
  },
  {
    pageName: "department",
    name: "leader",
    prop: "leader",
    type: "input",
    label: "部门领导",
  },
  {
    pageName: "department",
    type: "data-picker",
    prop: "createAt",
    name: "createAt",
    label: "创建时间",
  },
];

export const contentConfigs: contentConfig = {
  pageName: "department",
  title: "部门列表",
  newBtn: "新建部门",
  tableConfig: [
    {
      type: "index",
      label: "序号",
      width: "150",
    },
    {
      prop: "name",
      label: "部门名称",
    },
    {
      prop: "leader",
      label: "部门领导",
    },
    {
      prop: "parentId",
      label: "上级领导",
    },
    {
      slotName: "createAt",
      prop: "createAt",
      label: "创建时间",
    },
    {
      type: "handle",
      label: "操作",
    },
  ],
};

export default searchConfigs;
