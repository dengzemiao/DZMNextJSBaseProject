import Link from 'next/link'
import './page.moudle.css'

export default function Page () {
  return (
    <div className='about-page-view'>
      <div className='title'>关于我们</div>
      <div className='tool-view'>
        <Link href='/'>首页</Link>
      </div>
    </div>
  )
}
