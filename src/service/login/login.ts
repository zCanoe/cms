import hyRequest from "@/service";
import type { IAccount } from "../../../env";

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: "/login",
    data: {
      name: account.name,
      password: account.pwd,
    },
  });
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`,
  });
}

export function getUserMenuById(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`,
  });
}
