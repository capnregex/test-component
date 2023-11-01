import * as esbuild from 'esbuild'
import {sassPlugin} from 'esbuild-sass-plugin'

const context = await esbuild.context({
  entryPoints: ['src/index.js', 'src/test-component.js'],
  plugins: [sassPlugin({
    type: "css-text",
  })],
  bundle: true,
  outdir: 'www',
})

export default context;
