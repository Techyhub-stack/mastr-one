export enum PermissionAction {
  CREATE = "CREATE",
  READ = "READ",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}

export interface Permission {
  resource: string;

  action: PermissionAction;
}