import { Experience } from "./Experience";
import { Education } from "./Education";
import { SocialLinks } from "./SocialLinks";
import { User } from "./User";
import { ProfileInput } from "./ProfileInput";

export interface Profile extends ProfileInput {
  _id: string;
  user: User;
  skills: string[];
  experience: Experience[];
  education: Education[];
  social: SocialLinks[];
}