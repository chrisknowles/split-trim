import butternut from 'rollup-plugin-butternut';

export default {
  input: 'src/split-trim.js',
  output: [
    {
      file: 'dist/split-trim.min.js',
      name: 'store',
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [
    butternut()
  ]
};
