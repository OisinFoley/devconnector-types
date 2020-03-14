import { UserAuthentication } from "./UserAuthentication";

export interface CreateUserInput {
  email: UserAuthentication['email'];
  name: UserAuthentication['name'];
  avatar: UserAuthentication['avatar'];
  password: UserAuthentication['password'];
}