import { ErrorResponse } from "./ErrorResponse";

export interface ValidationResponse {
  errors: ErrorResponse;
  isValid: boolean;
}