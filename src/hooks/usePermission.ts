import { useLoginStore } from "@/store/login/login";
import { mapMenusToPermission } from "@/utils/map-menus";

const loginStore = useLoginStore();

export function usePermissions(pageName: string, execute: string): boolean {
  const permissions = mapMenusToPermission(loginStore.userMenu);
  return !!permissions.find((item) => item.includes(`${pageName}:${execute}`));
}

export function getPermission(pageName: string) {
  const isQuery = usePermissions(pageName, "query");
  const isCreate = usePermissions(pageName, "create");
  const isUpdate = usePermissions(pageName, "update");
  const isDelete = usePermissions(pageName, "delete");

  return {
    isQuery,
    isCreate,
    isUpdate,
    isDelete,
  };
}
