/** @type {import('next').NextConfig} */
const nextConfig = {
  // 正式模式开启严格模式（解决调研两次的情况）
  reactStrictMode: process.env.NODE_ENV === 'production',
  // 图片白名单（使用 Image 组件需要配置所有图片域名的白名单才能正常加载）
  images: {
    // 例如：https://www.baidu.com/xx/xx/xx.png
    domains: ['www.baidu.com']
  }
}
module.exports = nextConfig
