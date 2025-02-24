import { Type } from "@sinclair/typebox";

export const LoginRequestDTO = Type.Object({
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 6 }),
});

export const RegisterRequestDTO = Type.Object({
  name: Type.String({ minLength: 2 }),
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 6 }),
});

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
};
