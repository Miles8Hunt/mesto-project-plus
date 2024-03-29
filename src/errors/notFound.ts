import { Error } from 'mongoose';
import HTTP_STATUS from '../constansts/status-codes';

class NotFoundError extends Error {
  public statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = HTTP_STATUS.NOT_FOUND_ERROR;
  }
}

export default NotFoundError;
