export interface Product {
  id: number;
  name: string;
  amount: string;
}

export interface NewProduct {
  name: string;
  amount: string;
}

type Password = string | number;

export interface NewUser {
  username: string;
  vocation: string;
  level: number;
  password: Password;
}

export interface User extends NewUser{
  id: number;
}