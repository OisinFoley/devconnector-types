export interface EducationInput {
  school: string;
  degree: string;
  fieldOfStudy: string;
  from: Date;
  to?: Date;
  current?: Boolean;
  description?: string;
}