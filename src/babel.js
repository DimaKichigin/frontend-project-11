async function start() {
   return await Promise.resolve('async is working')
}

start().then(console.log)

const unused = 42

class Util {
   static id = Date.now()
}

console.log('Util id', Util.id)
console.log(unused)

// "import('lodash').then(_ => {})"
// "import('lodash').then(({ default: _ }) => {})"
import("lodash").then(({ default: _ }) => { console.log("Lodash\t", _.random(0, 27, true)); });
// import('lodash').then(_ => {
//    console.log('Lodash', _.random(0, 42, true))
// })

// npm i -D @babel/plugin-proposal-class-properties - доп плагин, который не установил

// Для всех, кто получает ошибку warning eslint-loader@4.0.2: This loader has been deprecated. Please use eslint-webpack-plugin

// 1. Установить eslint-webpack-plugin, eslint и @babel/eslint-parser

// 2. Создать в корне проекта файл .eslintrc.js и добавить в него следующий код:
// module.exports = {
//   // парсер отличается от того что в видео!
//   parser: "@babel/eslint-parser",
//   parserOptions: {
//     // без этой настройки ругается на отсутствие .babelrc
//     requireConfigFile: false
//   },
//   rules: {
//     "no-unused-vars": "warn"
//   },
//   env: {
//     "es6": true,
//     "browser": true
//   },
//   extends: [
//     "eslint:recommended"
//   ]
// }

// 3. Подключить плагин в вашем webpack.config.js (только в режиме разработки)
// const isDev = process.env.NODE_ENV === 'development'
// const plugins = [
//     // вынести сюда все плагины из конфига
// ]
// if (isDev) {
//     // если в режиме разработки, то добавить в массив плагинов eslint-webpack-plugin
//     plugins.push(new ESLintWebpackPlugin())
// }
// module.exports = {
// 		...
// 		plugins: plugins,  // используем объявленную выше переменную plugins
// 		...
// }