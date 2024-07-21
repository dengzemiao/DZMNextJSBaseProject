import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getDemo } from '@/api/server'
import { t, langsManager } from '@/utils/locales'
import HomeMoreList from '@/components/HomeMoreList'
import MoreList from './components/MoreList'
import './page.moudle.css'

export default async function Page (props: any) {
  // 记录语言（需要每个页面该位置都赋值一下，可以设置默认语言，当前语言，主要是因为第三方使用后一直报错，所以自用写了份，支持服务器、静态页面、客户端渲染）
  // 当前页面这里设置之后，所有组件内都会生效
  langsManager.lang = props.searchParams.lang
  // 服务器预加载数据（正常使用 data 数据即可）
  // const data_test = await getDemo()
  const data = ['1', '2']
  // 渲染首页
  return (
    <div className='home-page-view'>
      {/* 图片 */}
      <Image
        width={200}
        height={100}
        src='/images/next.svg'
        alt='next'
      ></Image>
      <div>首页 abc</div>
      {/* 自定义字体 */}
      <div style={{ fontFamily: 'HarmonyOS_Sans_Black_Italic' }}>首页 abc</div>
      {/* 锚点跳转 */}
      <div className='tool-view'>
        <div><a href="#section1">锚点定位：按钮</a></div>
        <div><Link href="/user#section1">锚点定位：页面</Link></div>
      </div>
      {/* 国际化 */}
      <div className='tool-view'>
        <div>国际化【{ t('name1') }】</div>
        <Link href='/?lang=cn'>中文</Link>
        <Link href='/?lang=tc'>繁体</Link>
        <Link href='/?lang=en'>英文</Link>
      </div>
      {/* 内容 */}
      <div className='tool-view'>
        <div>环境：{process.env.NODE_ENV}</div>
        {/* 把 div 当成组件即可，注意服务器组件顶部不需要申明 'use client'，客户端组件才需要 */}
        <div>服务器组件 - 首屏提前加载数据并生成 html 返回：{JSON.stringify(data, null, 2)}</div>
        <div>
          <Link href='/about'>关于我们</Link>
          <Link href='/user'>用户信息</Link>
        </div>
        <HomeMoreList></HomeMoreList>
        <MoreList></MoreList>
        {/* 锚点 */}
        <div id='section1' style={{ margin: '200px 0px' }}>锚点：section1</div>
      </div>
    </div>
  )
}
