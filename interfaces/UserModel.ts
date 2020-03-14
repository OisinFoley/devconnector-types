import { Document } from 'mongoose';
import { UserAuthentication } from './UserAuthentication';

export interface UserModel extends UserAuthentication, Document {
  id: string
  email: string;
  password: string;
}