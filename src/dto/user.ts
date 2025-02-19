import { UserType } from "../constants/user-types";

export interface UserRegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role: UserType;
}
