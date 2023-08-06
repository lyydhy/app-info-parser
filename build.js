const resolve = require("@rollup/plugin-node-resolve")
const {rollup} = require("rollup");
const commonjs = require('@rollup/plugin-commonjs')
// const esbuild = require('rollup-plugin-esbuild').default
const {babel} = require('@rollup/plugin-babel');
const path = require('path')
const terser = require('@rollup/plugin-terser')
const nodePolyfills = require('rollup-plugin-polyfill-node')
const buildFormats = [{
  key: 'es',
  dir: 'es'
},
  {
    key: 'umd',
    dir: 'umd',

  }]
async function main()
{

  const bundle = await rollup({
    input: path.resolve('./', `./lib/index.js`),
    plugins: [
      nodePolyfills({}),


      commonjs(),
      resolve({
        browser: true,
      }),
      // {
      //   ...esbuild({
      //     target: 'chrome70',
      //     // 如有需要可以在这里加 js ts 之类的其他后缀
      //     include: /\.js$/,
      //   }),
      //   enforce: 'post',
      // },
      babel({
        // @rollup/plugin-babel 6.0.3 如果使用 filter 就注释掉 exclude - 互斥的
        // exclude: 'node_modules/**',
        presets: ['@babel/preset-env'],
        // 需要显示指明babelHelpers 配置， 没配置，控制台有一些warning
        babelHelpers: 'bundled',
        // 5.2.1 是不需要配置 extensions 的
        // 5.2.2 以后 需要将 vue配置进去
        extensions: ['.ts', '.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],

        // filter @rollup/plugin-babel 在 5.3.0 版本才有
        // filter配置和 exclude 配置是互斥的，需要自己去实现去掉 node_modules的过滤
        filter: id => {
          return /(\.js|\.jsx|\.es6|\.es|\.mjs)$/.test(id) && !/node_modules/.test(id)
        },
        plugins: [

        ]
      })
    ]
  })

  for (const j of buildFormats) {
    let option = {
      format: j.key,

    }
    if (j.key === 'umd') {
      option.name = 'index'
    }
    // if (name === './' || name === 'core') {
    //   option.exports = 'named'
    // }
    await bundle.write({
      ...option,
      file: path.resolve('./', `${j.dir}/index.js`),
    })
    await bundle.write({
      ...option,
      plugins: [terser()],
      file: path.resolve('./', `${j.dir}/index.min.js`),
    })
  }

}

main()
