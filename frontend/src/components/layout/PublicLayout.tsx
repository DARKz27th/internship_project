import { Outlet, Link, NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export default function PublicLayout() {
  const { itemCount } = useCart()

  return (
    <div className="min-h-screen">
      <header className="site-header glass">
        <div className="site-header-inner">
          <Link to="/" className="site-logo" style={{ color: "white" }}>
  Aladdin Mobile Service
</Link>
          <nav className="site-nav">
            <div className="site-nav-main">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                end
              >
                หน้าแรก
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
              >
                สินค้า
              </NavLink>
              <NavLink
                to="/repair"
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
              >
                จองคิวซ่อม
              </NavLink>
              <NavLink
                to="/track-repair"
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
              >
                ติดตามงานซ่อม
              </NavLink>
              <NavLink
                to="/help"
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
              >
                ศูนย์ช่วยเหลือ
              </NavLink>
            </div>

            <div className="site-nav-actions">
              <Link to="/cart" className="nav-cart">
                <span className="nav-cart-icon">🛒</span>
                {itemCount > 0 && <span className="nav-cart-badge">{itemCount}</span>}
              </Link>
              <button type="button" className="nav-profile">
                <span className="nav-profile-avatar">U</span>
                <span className="nav-profile-name">บัญชีของฉัน</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="site-footer" style={{ padding: '4rem 1.5rem', background: 'var(--text-main)', color: 'white' }}>
        <div className="page-container" style={{ padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'left' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>E-COM<span>.</span></h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>แหล่งรวมสินค้าคุณภาพที่คัดสรรมาเพื่อคุณ พร้อมบริการที่เป็นเลิศ</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.2rem' }}>หมวดหมู่</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>อิเล็กทรอนิกส์</li>
                <li>แฟชั่น</li>
                <li>บ้านและสวน</li>
                <li>สุขภาพและความงาม</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1.2rem' }}>ฝ่ายสนับสนุน</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>ศูนย์ช่วยเหลือ</li>
                <li>การคืนสินค้า</li>
                <li>คำถามที่พบบ่อย</li>
                <li>ติดต่อเรา</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #334155', color: '#64748b', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} E-COM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
