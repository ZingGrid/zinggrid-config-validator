import { z, ZodError } from 'zod';
import { ZingGridSchema } from '../schema/zinggrid.schema.js';

export type ZingGridConfig = z.infer<typeof ZingGridSchema>;

export type ValidationResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      errors: ZodError<T>;
    };
