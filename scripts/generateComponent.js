import fs from 'fs';
import path from 'path';
import process from 'process';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: npm run generate:component <ComponentType> <ComponentName>');
  process.exit(1);
}

const [componentType, componentName] = args;
const componentNameLower = componentName.charAt(0).toLowerCase() + componentName.slice(1);

const paths = {
  ts: path.join(__dirname, '../src/ts-default', componentType, componentName),
  tsTailwind: path.join(__dirname, '../src/ts-tailwind', componentType, componentName),
  demo: path.join(__dirname, '../src/demo', componentType),
  constants: path.join(__dirname, '../src/constants/code', componentType)
};

Object.values(paths).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = [
  path.join(paths.ts, `${componentName}.tsx`),
  path.join(paths.ts, `${componentName}.css`),
  path.join(paths.tsTailwind, `${componentName}.tsx`),
  path.join(paths.demo, `${componentName}Demo.jsx`),
  path.join(paths.constants, `${componentNameLower}Code.js`)
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '');
  }
});

// Create meta.json files for TypeScript components
const metaJsonContent = {
  $schema: '../../../../schemas/component-metadata.json',
  description: ''
};

const metaFiles = [
  path.join(paths.ts, 'meta.json'),
  path.join(paths.tsTailwind, 'meta.json')
];

metaFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(metaJsonContent, null, 4) + '\n');
  }
});

console.log(`Component "${componentName}" structure created successfully under "${componentType}".`);
