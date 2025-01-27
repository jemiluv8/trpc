import { RollupOptions } from 'rollup';
import { buildConfig } from '../../scripts/getRollupConfig';

export const input = [
  'src/index.ts',
  'src/server/index.ts',
  'src/shared/index.ts',
  /**
   * @deprecated
   */
  'src/ssg/index.ts',
];

const __dirname = new URL('.', import.meta.url).pathname;

export default function rollup(): RollupOptions[] {
  return buildConfig({
    input,
    packageDir: __dirname,
  });
}
