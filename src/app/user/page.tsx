import Link from 'next/link'
import './page.moudle.css'
import MaoDian from '../components/MaoDian'

export default function Page () {
  return (
    <div className='user-page-view'>
      {/* 锚点处理 */}
      <MaoDian></MaoDian>
      {/* 用户信息 */}
      <div className='tool-view'>
        <div>用户信息</div>
        <Link href='/'>首页</Link>
        {/* 锚点 */}
        <div id='section1' style={{ margin: '1000px 0px' }}>锚点：section1</div>
      </div>
    </div>
  )
}
