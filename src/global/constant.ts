interface ICrumbs {
  name: string;
  path: string;
}

type searchConfig = {
  name: string;
  prop: string;
  type: string;
  label: string;
  placeholder?: string;
  option?: Array<{ label: string; value: any }>;
}[];
