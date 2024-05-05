export enum ErrorStatus {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  Conflict = 409,
  UnsupportedMediaType = 415,
  InternalServerError = 500,
  NotImplemented = 501
}

export enum Errors {
  USER_NOT_FOUND = 'auth/user-not-found',
  INVALID_PASSWORD = 'auth/wrong-password'
}
