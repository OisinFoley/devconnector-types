import { CommentInput } from "./CommentInput";

export interface Comment extends CommentInput {
  _id: string;
  user: string;
}