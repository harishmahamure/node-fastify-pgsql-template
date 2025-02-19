import { UserType } from "../constants/user-types";

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: UserType;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  utm: Record<string, string>;
  isVerified: boolean;
  created_at: Date;
}
