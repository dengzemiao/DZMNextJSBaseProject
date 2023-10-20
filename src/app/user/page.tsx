import Link from 'next/link'
import './page.moudle.css'

export default function Page () {
  return (
    <div className='user-page-view'>
      <div>用户信息</div>
      <div className='tool-view'>
        <Link href='/'>首页</Link>
      </div>
    </div>
  )
}
