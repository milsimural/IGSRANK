export type UserSignupForm = {
  name: string;
  email: string;
  password?: string;
};

export type UserLoginForm = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  money: number;
  createdAt: string;
  updatedAt: string;
};

type UserT<T = void> = {
  id: T extends void ? number : undefined;
  name: string;
  email: string;
  password: T extends void ? undefined : string;
  createdAt: T extends void ? number : undefined;
};

type UserForm = UserT<string>;
type UserData = UserT<void>;
