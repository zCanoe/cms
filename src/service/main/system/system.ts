import hyRequest from "@/service";

export function postUsersListData(data: any) {
  return hyRequest.post({
    url: "/users/list",
    data,
  });
}

export function deleteUserByid(id: number) {
  return hyRequest.request({
    url: `/users/${id}`,
    method: "delete",
  });
}

export function newUserAdd(data: any) {
  return hyRequest.post({
    url: "/users",
    data,
  });
}

export function editUserData(id: number, data: any) {
  return hyRequest.request({
    url: `/users/${id}`,
    method: "patch",
    data,
  });
}

export function postPageListData(data: any, page: string) {
  return hyRequest.post({
    url: `/${page}/list`,
    data,
  });
}

export function deletePageByid(id: number, page: string) {
  return hyRequest.request({
    url: `/${page}/${id}`,
    method: "delete",
  });
}

export function newPageAdd(data: any, page: string) {
  return hyRequest.post({
    url: `/${page}`,
    data,
  });
}

export function editPageData(id: number, data: any, page) {
  return hyRequest.request({
    url: `/${page}/${id}`,
    method: "patch",
    data,
  });
}
