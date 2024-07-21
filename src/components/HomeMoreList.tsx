'use client'
import Link from 'next/link'
import { useState } from 'react'
import { getDemo } from '@/api/client'
import { usePathname, useRouter } from 'next/navigation'
import './HomeMoreList.moudle.css'

export default function Component (props: any) {
  // 数据源
  const [dataSource, setDataSource] = useState<string[]>([])
  // 路由对象【router.push()】
  const router = useRouter()
  // 加载更多数据
  const touchMore = async () => {
    // 获取更多数据 (直接使用 data 数据即可)
    // const data = await getDemo()
    // 使用进行展示
    setDataSource([...dataSource, ...['1', '2']])
  }
  // 重新加载指定页面
  const reloadPage = () => {
    const key = Date.now()
    window.location.href = `/user`
  }
  // 渲染组件
  return (
    <div className='home-more-list-view'>
      {/* 链接操作 */}
      <div className='tool-view'>
        <div>跳转链接操作</div>
        <Link href='/user'>当前窗口打开，不重新请求服务器</Link>
        {/* 点击事件只能放在客户端组件内， window、document 等属性也是一样 */}
        <a onClick={reloadPage}>当前窗口打开，重新请求服务器</a>
        <Link href='/user' target='_blank'>新窗口打开，重新请求服务器</Link>
      </div>
      <div style={{ marginTop: '20px' }}>
        客户端组件 - 全局公共组件 - 点击加载更多数据客户端渲染（需要配置代理）：{JSON.stringify(dataSource)}
      </div>
      {
        dataSource.map((item, index) => {
          return <div key={100 + index}>{item}</div>
        })
      }
      <a onClick={touchMore}>加载更多</a>
    </div>
  )
}