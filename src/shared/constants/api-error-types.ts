export enum ERROR_TYPES {
  wrongResetCode = "wrong-reset-code",
}

export type BadRequestErrorType = {
  type: ERROR_TYPES;
};
