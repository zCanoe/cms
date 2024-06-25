import type { RouteRecordRaw } from "vue-router";

export let firstMenu: any = null;

export function mapMenuToRouter(userMenu: []) {
  // 动态获取所自动生成的route,利用vite的文件操作
  const glob: Record<string, any> = import.meta.glob("@/router/main/**/*.ts", {
    eager: true,
  });
  const dynamicRouters: Array<RouteRecordRaw> = [];
  const result: Array<RouteRecordRaw> = [];
  for (const item in glob) {
    dynamicRouters.push(glob[item]?.default);
  }

  // 根据菜单动态匹配路由
  userMenu?.forEach((item: any) => {
    if (item.children) {
      for (const child of item.children) {
        const route: RouteRecordRaw | undefined = dynamicRouters.find(
          (dr) => dr.path === child.url,
        );
        if (route) {
          if (!result.find((r) => r.path === item.url))
            result.push({ path: item.url, redirect: route.path });
          result.push(route);
        }
        if (route && !firstMenu) firstMenu = route.path;
      }
    }
  });

  return result;
}

export function mapPathToMenu(path: string, userMenu: []) {
  let id = "-1";
  userMenu.forEach((u: any) => {
    if (u.children) {
      for (const uElement of u.children) {
        if (uElement.url === path) id = `${uElement.id}`;
      }
    }
  });

  return id;
}

export function mapPathToCrumb(path: string, userMenu: []) {
  const crumbs: Array<ICrumbs> = [];

  userMenu.forEach((u: any) => {
    if (u.children) {
      for (const uElement of u.children) {
        if (uElement.url === path) {
          crumbs.push({ name: u.name, path: u.url });
          crumbs.push({ name: uElement.name, path: uElement.url });
        }
      }
    }
  });

  return crumbs;
}
