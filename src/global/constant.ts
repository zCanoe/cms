interface ICrumbs {
  name: string;
  path: string;
}

export type searchConfig = {
  pageName: string;
  name: string;
  prop: string;
  type: string;
  label: string;
  placeholder?: string;
  option?: Array<{ label: string; value: any }>;
}[];

export type contentConfig = {
  pageName: string;
  title: string;
  newBtn: string;
  tableConfig: {
    type?: string;
    width?: string;
    prop?: string;
    slotName?: string;
    label: string;
  }[];
};

export type modalConfig = {
  pageName: string;
  title: string;
  formConfig: {
    label: string;
    prop: string;
    placeholder: string;
    slotName?: string;
  }[];
};
