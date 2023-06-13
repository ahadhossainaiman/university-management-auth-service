import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessage } from '../../interfaces/error';
import { IGenericErrorResponse } from '../../interfaces/common';

const handleZorError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validate Error',
    errorMessages: errors,
  };
};

export default handleZorError;