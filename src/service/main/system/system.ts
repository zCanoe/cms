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
