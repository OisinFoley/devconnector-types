import { Document } from 'mongoose';

import { Post } from './Post';

export interface PostModel extends Post, Document {
  _id: string;
}