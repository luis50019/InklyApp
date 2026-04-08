import { AppError } from "./AppError";

export class NetWorkError extends AppError {
  constructor(message = "Error de conexion", code = "NETWORK_ERROR") {
    super(message, code);
  }
}
