# DZMNextJSBaseProject

基于 Next.js 13.x 封装的 SSR 基础框架，包含代理配置、接口请求、环境变量、组件案例、加载更多数据，区分服务器组件与客户端组件以及接口....

- [Nextjs 中文文档](https://nextjs.frontendx.cn/)

- 项目初始环境：`node v16.14.0`

  - 2024-7-23 升级为 `nextjs 14` - `node v18.17.0 (npm v9.6.7)` 因为可以使用 [antd ui](https://ant.design/docs/react/use-with-next-cn)，注意配置 `App Router` 闪屏配置。

- 客户端请求的代理配置使用 `Nginx` 完成，可参考 `src/api/axios.ts` 文件顶部提示。

- 预处理器推荐

  - 1、使用 `sass`，安装后将 `css` 后缀改为 `scss` 即可直接使用。

  ```sh
  $ npm i sass
  ```

  - 2、直接使用 `CSS Modules`
