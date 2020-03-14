import { Profile } from "./Profile";

export interface SetProfileResponse {
  operation: 'edit' | 'create';
  profile: Profile | null;
}