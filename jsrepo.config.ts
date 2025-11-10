import { defineConfig, RegistryItem } from 'jsrepo';
import { distributed } from 'jsrepo/outputs';
import { output as shadcn } from '@jsrepo/shadcn/output';
import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

export default defineConfig({
  registry: [
    ({ cwd }) => ({
      name: '@react-bits',
      authors: ['David Haz'],
      description:
        'An open source collection of animated, interactive & fully customizable React components for building stunning, memorable user interfaces.',
      bugs: 'https://github.com/DavidHDev/react-bits/issues',
      homepage: 'https://reactbits.dev',
      repository: 'https://github.com/DavidHDev/react-bits',
      tags: [
        'react',
        'javascript',
        'components',
        'web',
        'reactjs',
        'css-animations',
        'component-library',
        'ui-components',
        '3d',
        'ui-library',
        'tailwind',
        'tailwindcss',
        'components',
        'components-library'
      ],
      excludeDeps: ['react'],
      items: [
        ...getItems({ dir: path.join(cwd, 'src/ts-default'), cwd }),
        ...getItems({ dir: path.join(cwd, 'src/ts-tailwind'), cwd, suffix: 'tw' })
      ],
      outputs: [shadcn({ dir: 'public/r' }), distributed({ dir: 'public/jsrepo' })]
    })
  ]
});

const metaSchema = z.object({
  description: z.string().optional()
});

function getItems({ dir, cwd, suffix }: { dir: string; cwd: string; suffix?: string }): RegistryItem[] {
  const types = fs.readdirSync(dir);

  return types.flatMap(typeDir => {
    const items = fs.readdirSync(path.join(dir, typeDir));

    return items.map(item => {
      const files = fs.readdirSync(path.join(dir, typeDir, item));
      let description: string | undefined;
      if (files.includes('meta.json')) {
        const meta = metaSchema.parse(JSON.parse(fs.readFileSync(path.join(dir, typeDir, item, 'meta.json'), 'utf-8')));
        description = meta.description;
      }
      return {
        name: `${pascalToKebab(item)}${suffix ? `-${suffix}` : ''}`,
        title: item,
        description,
        type: 'registry:block',
        files: files
          .filter(f => f !== 'meta.json')
          .map(file => {
            return {
              path: path.relative(cwd, path.join(dir, typeDir, item, file)),
              // prevent warnings
              dependencyResolution: endsWithOneOf(file, ['.glb', '.png']) ? 'manual' : 'auto'
            };
          })
      } satisfies RegistryItem;
    });
  });
}

/** Converts a `PascalCase` string to a `kebab-case` string
 *
 * @param str
 * @returns
 *
 * ## Usage
 * ```ts
 * camelToSnake('HelloWorld'); // hello-world
 * ```
 */
export function pascalToKebab(str: string): string {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    // is uppercase letter (ignoring the first)
    if (i > 0 && isLetter(str[i]) && str[i].toUpperCase() === str[i]) {
      let l = i;

      while (l < str.length && isLetter(str[l]) && str[l].toUpperCase() === str[l]) {
        l++;
      }

      newStr += `${str.slice(i, l - 1).toLocaleLowerCase()}-${str[l - 1].toLocaleLowerCase()}`;

      i = l - 1;

      continue;
    }

    newStr += str[i].toLocaleLowerCase();
  }

  return newStr;
}

const LETTER_REGEX = new RegExp(/[a-zA-Z]/);

/** Checks if the provided character is a letter in the alphabet.
 *
 * @param char
 * @returns
 *
 * ## Usage
 * ```ts
 * isLetter('a');
 * ```
 */
function isLetter(char: string): boolean {
  if (char.length > 1) {
    throw new Error(`You probably only meant to pass a character to this function. Instead you gave ${char}`);
  }

  return LETTER_REGEX.test(char);
}

function endsWithOneOf(str: string, endings: string[]): boolean {
  return endings.some(ending => str.endsWith(ending));
}
