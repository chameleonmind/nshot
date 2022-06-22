import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  minify: true,
  format: ['esm', 'iife', 'cjs'],
  legacyOutput: true
})
