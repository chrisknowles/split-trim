export default {
  input: 'src/split-trim.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/split-trim.js',
      name: 'SplitTrim',
      format: 'umd'
    }
  ]
};
