# webpack5

`webpack5` 脚手架，包含了 `babel` 转译，`eslint` 规范， 添加 `css` 前缀，压缩资源，代码分割，手写简易 `less-loader` 等

```
webpack5
├─.eslintrc.json
├─package-lock.json
├─package.json
├─postcss.config.js
├─webpack.config.base.js   公共配置
├─webpack.config.dev.js    开发环境配置
├─webpack.config.prod.js   生产环境配置
├─src
|  ├─index.html
|  ├─js
|  | ├─index.js
|  | ├─server.js
|  | └test.js
|  ├─image
|  |   └logo.png
|  ├─css
|  |  ├─a.css
|  |  └index.css
├─loader                   loader插件
|   └less-loader.js
```