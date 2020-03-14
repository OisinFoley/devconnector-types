import { PostInput } from './PostInput';
import { Comment } from './Comment';
import { Like } from './Like';

export interface Post extends PostInput {
  _id: string;
  likes: Like[];
  comments: Comment[];
  date: Date;
}