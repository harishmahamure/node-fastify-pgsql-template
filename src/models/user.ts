import { UserType } from '../constants/user-types';

interface UTM {
  source: string;
  medium: string;
  campaign: string;
}
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
  utm: UTM;
  isVerified: boolean;
  created_at: Date;
}

export const userTable = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  username: 'username',
  password: 'password',
  role: 'role',
  updatedAt: 'updatedAt',
  isActive: 'isActive',
  utm: 'utm',
  isVerified: 'isVerified',
  created_at: 'created_at',
};
