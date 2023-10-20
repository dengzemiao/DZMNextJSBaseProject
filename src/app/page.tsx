import { useState } from 'react'
import Link from 'next/link'
import { getDemo } from '@/api/server'
import HomeMoreList from '@/components/HomeMoreList'
import MoreList from './components/MoreList'
import './page.moudle.css'

export default async function Page (props: any) {
  // 服务器预加载数据（正常使用 data 数据即可）
  const data_test = await getDemo()
  const data = ['1', '2']
  // 渲染首页
  return (
    <div className='home-page-view'>
      <div>首页</div>
      <div className='tool-view'>
        <div>环境：{process.env.NODE_ENV}</div>
        <div>服务器预先加载数据：{JSON.stringify(data_test, null, 2)}</div>
        <div>
          <Link href='/about'>关于我们</Link>
          <Link href='/user'>用户信息</Link>
        </div>
        <HomeMoreList></HomeMoreList>
        <MoreList></MoreList>
      </div>
    </div>
  )
}
