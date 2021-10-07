module.exports = {
  // 首先是我们的globals，ESLint会检测未声明的变量，并发出报错，
  // 比如node环境中的process，浏览器环境下的全局变量console，
  // 以及我们通过cdn引入的jQuery定义的$等；我们可以在globals中进行变量声明
  globals: {
    process: true
  },
  // 表示环境变量 例如全局的$等
  env: {
    // 浏览器模式
    browser: true,
    // node环境模式
    commonjs: true,
    es2021: true
  },
  // 表示使用插件
  // eslint插件以eslint-plugin-开头，使用时可以省略；
  plugins: ['prettier'],
  // 继承于哪些插件特性
  // eslint：开头的ESLint官方扩展，有两个：eslint:recommended（推荐规范）和eslint:all（所有规范）。
  // plugin：开头的扩展是插件类型扩展
  // eslint-config：开头的来自npm包，使用时可以省略eslint-config-，比如上面的可以直接写成standard
  // @：开头的扩展和eslint-config一样，是在npm包上面加了一层作用域scope
  extends: ['airbnb-base', 'prettier'],
  // 解析ast的包
  parser: '@typescript-eslint/parser',
  // ast解析包的参数
  parserOptions: {
    ecmaVersion: 12
  },
  // 配置的规则
  rules: {
    'no-console': 'off'
  }
}
