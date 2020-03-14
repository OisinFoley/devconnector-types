import { Document } from 'mongoose';

import { Profile } from "./Profile";

export interface ProfileModel extends Profile, Document {
  _id: string;
}