# vue单页应用搭建

### 安装

1. 安装命令行工具

   ```
   npm install --global vue-cli
   ```

2. 初始化项目

   ```
   vue init webpack my-project 
   /*
   	注意根据不同需求选择不同配置
   */
   ```

3. 启动项目

   ```
   npm run dev (开发环境)  npm run build (生成环境)
   ```

###  项目结构

```
├── README.md                   // help
├── issue.md                    // 项目中遇到的问题及处理方法
├── dist                        // 生成文件
├── src                         // 项目源代码
│   ├── components              // 通用组件
│   ├── page 					// 具体业务模块
│   │    └── home.vue           // 页面   
│   ├── assets 	 				// 静态资源
│	│── router                  // 路由文件 
│	│── config                  // 公共方法
│	│── plugins                 // 插件
│	│── service                 // 网络请求
│ 		 └── getData.js         // 配置网络请求数据
│	│── App.vue                 // 入口vue模板
│	│── main.js                 // 入口js
│   └── style                   // 样式
│        │── base               // 基础样式   
│        │── common             // 公共样式
│ 		 └── test               // 基础样式   
├── index.html                  // 项目入口文件
├── .editorconfig               // 配置文件
├── node_modules                // 项目依赖包
├── package.json                // 项目配置信息.gitignore
├── .gitignore                  // git文件提交管理文件
├── .postcssrc.js               // PostCSS配置文件    
└── .babelrc                    // 设置转码的规则,插件,文件地址映射
```

###  配置 stylus-loader

```
/*
	由于项中用到了stylus CSS的预处理框架，所有需要配置stylus-loader编译
*/
npm install stylus-loader --save-dev 或 -D
npm install stylus -D //stylus编译工具
```

### 页面中引入样式

```
<style lang="stylus">
  @import '../style/test'
</style>
```

### 安装组件库

```
npm i element-ui -S
```

### 引入组件

```
/*
参考http://element-cn.eleme.io/#/zh-CN/component/quickstart
*/

```

#####  按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
首先，安装 babel-plugin-component：

```
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

### 开发环境配置代理

1. [参考网站](https://www.cnblogs.com/tugenhua0707/p/8052051.html)

```
config/index.js文件中配置代理
proxyTable: {}
```

### 安装axios

```
npm i axios -S
```

###  favicon.ico配置

```
build/webpack.dev.conf.js文件中配置favicon
new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico', //favicon.ico配置
      inject: true
    }),
```

### 路由懒加载 

[参考网站](https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)

### 打包生成环境注意事项

1. 配置生成环境api访问地址

   ```
   //src/config/env.js
   let baseUrl = '';
   if (process.env.NODE_ENV == 'development') { //开发环境 dev
     //baseUrl = 'http://fly.pgyspace.com/api/';
   } else if (process.env.NODE_ENV == 'production') {//生产改动点
     // baseUrl = 'http://fly.pgyspace.com/api/';
   }
   ```

   ​

2. 配置打包生成路径及文件夹名称

   ```
   //生成路径配置config/index.js
    build: {
       // Template for index.html
       index: path.resolve(__dirname, '../dist/index.html'), //配置输出文件名称
       // Paths
       assetsRoot: path.resolve(__dirname, '../dist'), //配置输出文件名称
       assetsPublicPath: './', //注意在生产环境中assetsPublicPath路径/前加.
       ...
     }
   ```

   ​

