'use strict'
require('./check-versions')() // 检查 Node 和 npm 版本

process.env.NODE_ENV = 'production'

const ora = require('ora') // 一个很好看的 loading 插件
const rm = require('rimraf')
const path = require('path') // 使用 NodeJS 自带的文件路径插件
const chalk = require('chalk')
const webpack = require('webpack') // 加载 webpack
const config = require('../config') // 获取 config/index.js 的默认配置
const webpackConfig = require('./webpack.prod.conf') // 加载 webpack.prod.conf

console.log( //  输出提示信息 ～ 提示用户请在 http 服务下查看本页面，否则为空白页
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for production...') // 使用 ora 打印出 loading + log
spinner.start() // 开始 loading 动画

/* 拼接编译输出文件路径 */
var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

rm(assetsPath, err => {
  if (err) throw err
  //  开始 webpack 的编译
  webpack(webpackConfig, (err, stats) => {
    // 编译成功的回调函数
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
