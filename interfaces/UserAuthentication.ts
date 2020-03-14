import { User } from './User';
export interface UserAuthentication extends User {
  email: string;
  password: string;
  date: Date;
}