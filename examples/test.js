import { validateZingGridConfig } from '../dist/src/validator/validate.js';
import * as z from 'zod';

const validConfig = {
  columns: [{ index: 'name' }],
  data: [{ name: 'Alice' }]
}; 

const invalidConfig = {
  columns: [{ index: 'name' }],
  data: [{ name: 'Alice' }],
  fake: true, // This should cause a validation error
};

function validateConfig(name, config) {
  const result = validateZingGridConfig(config);

  if (!result.success) {
    console.error(`${name} is invalid!\n${z.prettifyError(result.errors)}\n`);
  } else {
    console.log(`${name} is valid!\n`);
  };
};

validateConfig('Config 1', validConfig);
validateConfig('Config 2', invalidConfig);
