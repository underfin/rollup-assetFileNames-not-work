const rollup = require('rollup');
const path =  require('path')
// see below for details on the options
const inputOptions = {
  input: 'input.js',
};
const outputOptions = {
  output: {
    dir: 'dist',
    entryFileNames: '[name].[hash].js',
    assetFileNames: '[name].[hash].[ext]'
  },
  plugins: [
    {
      generateBundle() {
        this.emitFile( {
          name: '1.css',
          type: 'asset',
          fileName: '1.css',
          source: '1'
        })
      },

    }
  ]
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions)

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
