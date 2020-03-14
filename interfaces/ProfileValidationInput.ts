import { ProfileInput } from "./ProfileInput";

export interface ProfileValidationInput extends ProfileInput {
  website: string;
  youtube: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  instagram: string;
}