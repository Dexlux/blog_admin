
## 开发

```bash
# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动开发环境服务
npm run dev

# 启动测试环境服务
npm run dev:test
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:test

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## 域名配置

```javascript
  // .env.production 生产环境
  VUE_APP_BASE_API // 接口域名地址

  // .env.development 开发环境 .env.test 测试环境
  VUE_APP_PROXY_URL // 代理地址
```