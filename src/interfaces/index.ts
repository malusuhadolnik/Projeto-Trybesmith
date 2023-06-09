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

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface UserCredentials {
  username: string;
  password: string;
}