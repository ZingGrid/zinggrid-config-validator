#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { validateZingGridConfig } from '../validator/validate.js';
import * as z from "zod";

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: validate-config <path-to-json>');
  process.exit(1);
};

const absolutePath = path.resolve(filePath);

try {
  const raw = fs.readFileSync(absolutePath, 'utf-8');
  const json = JSON.parse(raw);

  const result = validateZingGridConfig(json);

  if (!result.success) {
    console.error('❌ Validation failed:');
    console.error(z.prettifyError(result.errors));
    process.exit(1);
  };

  console.log('✅ Configuration is valid.');
} catch (err) {
  console.error('❌ Could not read or parse file:');
  console.error(err);
  process.exit(1);
};
