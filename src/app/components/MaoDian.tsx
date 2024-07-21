'use client'
import { useEffect } from 'react';

export default function Component (props: any) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('客户端环境')
      // 获取锚点，并跳转
      const element = document.getElementById(window.location.hash.substring(1))
      // 不想要动画可以百度搜索 “scrollIntoView 不带动画”
      if (element) { element.scrollIntoView({ behavior: 'smooth' }) }
    } else {
      console.log('非客户端环境')
    }
  }, [])
  
  // 渲染组件
  return (<></>)
}