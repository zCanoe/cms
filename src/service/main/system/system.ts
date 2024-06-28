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
