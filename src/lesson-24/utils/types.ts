export type UserType = {
  name: string;
  surname: string;
  age: number;
};

export type MyErrorType = {
  code: number;
  message: string;
};

export type StateType = {
  token?: string | null;
  user?: UserType | null;
  errors?: MyErrorType[] | null;
};

export type ActionType = {
  user: UserType | null;
  errors: MyErrorType[];
};
