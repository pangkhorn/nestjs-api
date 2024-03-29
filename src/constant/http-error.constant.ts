import { HttpStatus } from '@nestjs/common';

export enum HttpError {
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unauthorized',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'Not Found',
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  NOT_ACCEPTABLE = 'Not Acceptance',
  TOO_MANY_REQUESTS = 'Too Many Requests',
  INTERNAL_SERVER = 'Internal Server Error'
}

export const statusToError = (status: number) => {
  switch (status) {
    case HttpStatus.BAD_REQUEST:
      return HttpError.BAD_REQUEST;
    case HttpStatus.UNAUTHORIZED:
      return HttpError.UNAUTHORIZED;
    case HttpStatus.FORBIDDEN:
      return HttpError.FORBIDDEN;
    case HttpStatus.NOT_FOUND:
      return HttpError.NOT_FOUND;
    case HttpStatus.METHOD_NOT_ALLOWED:
      return HttpError.METHOD_NOT_ALLOWED;
    case HttpStatus.NOT_ACCEPTABLE:
      return HttpError.NOT_ACCEPTABLE;
    case HttpStatus.TOO_MANY_REQUESTS:
      return HttpError.TOO_MANY_REQUESTS;
    default:
      return HttpError.INTERNAL_SERVER;
  }
};
