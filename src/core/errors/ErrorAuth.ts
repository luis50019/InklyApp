import { AppError } from "./AppError";

export class ErrorAuth extends AppError {
  constructor(message = "Error de autenticacion", code = "AUTH_ERROR") {
    super(message, code);
  }
}
