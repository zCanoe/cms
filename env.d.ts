/// <reference types="vite/client" />

import type { DefineComponent } from "vue";

export declare module "*.vue" {
  const component: DefineComponent;
  export default component;
}

export declare interface IAccount {
  name: string;
  pwd: string;
}
