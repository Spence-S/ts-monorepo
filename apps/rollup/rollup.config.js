import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const conf = [
  {
    input: 'src/index.tsx',
    external: Object.keys(pkg.dependencies),
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
    ],
    output: [{dir: './dist', format: 'cjs', sourcemap: true}],
  },
];

export default conf;
