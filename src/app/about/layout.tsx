import './layout.moudle.css'

export default function Layout ({ children } : { children: React.ReactNode }) {
  return (
    <div className="about-layout-view">
      { children }
    </div>
  )
}
