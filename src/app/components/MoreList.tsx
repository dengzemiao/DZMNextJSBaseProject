'use client'
import { useState } from 'react'
import { getDemo } from '@/api/client'
import './MoreList.moudle.css'

export default function Component (props: any) {
  // 数据源
  const [dataSource, setDataSource] = useState<string[]>([])
  // 加载更多数据
  const touchMore = async () => {
    // 获取更多数据 (直接使用 data 数据即可)
    // const data = await getDemo()
    // 使用进行展示
    setDataSource([...dataSource, ...['1', '2']])
  }
  // 渲染组件
  return (
    <div className='home-more-list-view'>
      <div>客户端组件 - 页面独用组件 - 点击加载更多数据客户端渲染（需要配置代理）：{JSON.stringify(dataSource)}</div>
      {
        dataSource.map((item, index) => {
          return <div key={10 + index}>{item}</div>
        })
      }
      <a onClick={touchMore}>加载更多</a>
    </div>
  )
}