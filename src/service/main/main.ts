import hyRequest from "@/service";

export function getEntireRoles(data: any = {}) {
  return hyRequest.post({
    url: "/role/list",
    data,
  });
}

export function getEntireDepartments(data: any = {}) {
  return hyRequest.post({
    url: "/department/list",
    data,
  });
}

export function getEntireMenus(data: any = {}) {
  return hyRequest.post({
    url: "/menu/list",
    data,
  });
}
