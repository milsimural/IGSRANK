export type UserSignupForm = {
  name: string;
  email: string;
  password?: string;
};

export type UserLoginForm = {
  email: string;
  password: string;
};

// User который возвращает регистрация и логин
export type User = {
  id: number;
  name: string;
  email: string;
  money: number;
  createdAt: string;
  updatedAt: string;
};
