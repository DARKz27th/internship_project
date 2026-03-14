import { FadeInSection } from '../components/common/FadeInSection'
import { repairPackages } from '../data/repairPackages.ts'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="page-container animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Best E-Commerce Platform 2026</span>
          <h1 className="hero-title">ยกระดับประสบการณ์การช้อปปิ้งของคุณ</h1>
          <p className="hero-subtitle">
            ค้นพบสินค้าคุณภาพเยี่ยมและบริการซ่อมมืออาชีพที่คุณวางใจได้
            เราพร้อมดูแลคุณด้วยมาตรฐานระดับสากล
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/products" className="btn btn-primary">ช้อปสินค้าเลย</Link>
            <Link to="/repair" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>จองคิวซ่อม</Link>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <div className="section-header">
          <h2 className="section-title">บริการที่เป็นเลิศ</h2>
          <Link to="/repair" className="text-muted" style={{ fontWeight: 600 }}>ดูทั้งหมด →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <FadeInSection delayMs={100}>
            <div className="card product-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ marginBottom: '1rem' }}>ซ่อม iPhone & iPad</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                เปลี่ยนจอแท้ เปลี่ยนแบตเตอรี่คุณภาพสูง และแก้ปัญหาเครื่องไม่ติดทุกอาการ โดยผู้เชี่ยวชาญ
              </p>
              <Link to="/repair" style={{ color: 'var(--primary)', fontWeight: 600 }}>เริ่มต้นจองคิว →</Link>
            </div>
          </FadeInSection>

          <FadeInSection delayMs={200}>
            <div className="card product-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ marginBottom: '1rem' }}>Samsung & Android</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                รับรองงานซ่อม Samsung, VIVO, OPPO, Xiaomi และแบรนด์ชั้นนำอื่นๆ พร้อมอะไหล่แท้
              </p>
              <Link to="/repair" style={{ color: 'var(--primary)', fontWeight: 600 }}>เริ่มต้นจองคิว →</Link>
            </div>
          </FadeInSection>

          <FadeInSection delayMs={300}>
            <div className="card product-card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>📦</div>
              <h3 style={{ marginBottom: '1rem' }}>อะไหล่คุณภาพ</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                จำหน่ายหน้าจอ แบตเตอรี่ และอะไหล่มือถือสำหรับช่างและผู้ที่สนใจนำไปเปลี่ยนเอง
              </p>
              <Link to="/products" style={{ color: 'var(--primary)', fontWeight: 600 }}>เลือกชมสินค้า →</Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <div className="section-header">
          <h2 className="section-title">แพ็กเกจซ่อมยอดนิยม</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {repairPackages.slice(0, 4).map((pkg, idx) => (
            <FadeInSection key={pkg.id} delayMs={idx * 100}>
              <div className="product-card">
                <div className="product-card-image">
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '0.2rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    zIndex: 2
                  }}>
                    HOT
                  </div>
                  <img src={'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=500&q=80'} alt={pkg.name} />
                </div>
                <div className="product-card-body">
                  <div className="text-muted" style={{ fontSize: '0.8rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{pkg.deviceType}</div>
                  <h4 className="product-card-title">{pkg.name}</h4>
                  <div className="product-card-price">
                    {pkg.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>ใช้เวลาประมาณ {pkg.estimatedTime}</p>
                  <button className="btn btn-primary" style={{ width: '100%' }}>จองตอนนี้</button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="glass" style={{ padding: '4rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>พร้อมรับข่าวสารพิเศษ?</h2>
        <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
          ลงทะเบียนเพื่อรับข้อมูลโปรโมชั่นล่าสุดและเทคนิคการดูแลรักษามือถือของคุณจากผู้เชี่ยวชาญ
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', maxWidth: '500px', marginInline: 'auto' }}>
          <input type="email" className="input" placeholder="ใส่อีเมลของคุณ" style={{ flex: 1 }} />
          <button className="btn btn-primary">ติดตามเลย</button>
        </div>
      </section>
    </div>
  )
}
