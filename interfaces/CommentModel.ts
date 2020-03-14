import { Comment } from "./Comment";

export interface CommentModel extends Comment, Document {
  _id: string;
}