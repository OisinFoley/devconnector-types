export interface ExperienceInput {
  title: string;
  company: string;
  location?: string;
  from: Date;
  to?: Date;
  current: boolean;
  description?: string;
}