export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
  CLIENT = "CLIENT"
}

export interface User {
  id: string;

  email: string;

  firstName?: string;

  lastName?: string;

  avatarUrl?: string;

  emailVerified: boolean;

  createdAt: Date;

  updatedAt: Date;
}