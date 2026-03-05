import { ZingGridSchema } from '../schema/zinggrid.schema.js';
import type { ValidationResult, ZingGridConfig } from './types.js';

export function validateZingGridConfig(config: unknown): ValidationResult<ZingGridConfig> {
  const result = ZingGridSchema.safeParse(config);

  if (!result.success) {
    return {
      success: false,
      errors: result.error,
    };
  };

  return {
    success: true,
    data: result.data,
  };
};
