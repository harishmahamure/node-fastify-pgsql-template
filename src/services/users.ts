import { UserType } from '../constants/user-types';
import { RegisterRequest } from '../dto/user';
import { UserRepository } from '../repositories/user';
import { NotFoundError, UnauthorizedError } from '../utils/custom-error';
import { AuthUtil } from '../utils/jwt';
import { SecurityUtil } from '../utils/password';

interface UserRegisterData extends RegisterRequest {
  role: UserType;
}

export class UserService {
  static async login(email: string, password: string) {
    const user = await UserRepository.findUserByEmail(email);

    const salt = SecurityUtil.generateSalt();

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const isValidPassword = SecurityUtil.comparePassword(password, salt, user.password);

    if (!isValidPassword || !user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    return {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      accessToken: AuthUtil.signAccessToken({ id: user.id, role: user.role }),
      refreshToken: AuthUtil.signRefreshToken({ id: user.id }),
    };
  }

  static async register(user: UserRegisterData) {
    const userExists = await UserRepository.findUserByEmail(user.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const salt = SecurityUtil.generateSalt();
    const password = SecurityUtil.hashPassword(user.password, salt);

    return await UserRepository.createUser({ ...user, password });
  }

  static async getUser(id: number) {
    return await UserRepository.getUserDetails(id);
  }
}
