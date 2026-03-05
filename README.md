# ZingGrid Config Validator

A TypeScript + Zod-based validator for ZingGrid configuration files.

## Features

* Schema validation using Zod
* Reusable validator function
* CLI validation tool
* Full TypeScript support

---

## Installation

```bash
npm install
npm run build
```

---

## Using the Validator Function

```js
import { validateZingGridConfig } from "zinggrid-config-validator";
import * as z from "zod";

// Valid config should pass
const config = {
  columns: [{ index: "name" }],
  data: [{ name: "Alice" }]
};

const result = validateZingGridConfig(config);

if (!result.success) {
  console.error("Config is invalid!");
  console.error(z.prettifyError(result.errors));
} else {
  console.log("Config is valid!");
};

```

---

## Using the CLI

Validate a JSON file:

```bash
npx zg-validate path/to/config.json
```

Example:

```bash
npx zg-validate examples/valid-config.json
```

If valid:

```
✅ Config is valid.
```

If invalid:

```
❌ Validation failed:
<error details>
```

---

## Project Structure

```
src/
  schema/
    zinggrid.schema.ts
  validator/
    validator.ts
    types.ts
  cli
    validate-config.ts
examples/
  valid-config.json
```

---

## Development

Rebuild after changes:

```bash
npm run build
```

---

## Requirements

* Node.js >= 18
* TypeScript 5+

