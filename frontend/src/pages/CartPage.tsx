import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export function CartPage() {
  const { items, total, removeItem, clear } = useCart()

  const hasItems = items.length > 0

  return (
    <div className="page-container animate-fade-in" style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>ตะกร้าสินค้าของคุณ</h1>
        <p className="text-muted">ตรวจสอบรายการสินค้าและเตรียมตัวสำหรับการช้อปปิ้งที่แสนวิเศษ</p>
      </div>

      {!hasItems && (
        <div className="card glass" style={{ padding: '4rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
          <h2 style={{ marginBottom: '1rem' }}>ตะกร้ายังว่างอยู่</h2>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>ดูเหมือนว่าคุณยังไม่ได้เลือกสินค้าใดๆ เลย ลองกลับไปเลือกชมสินค้าที่น่าสนใจดูนะคะ</p>
          <Link to="/products" className="btn btn-primary">
            ไปที่หน้าสินค้า
          </Link>
        </div>
      )}

      {hasItems && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>
              รายการสินค้า ({items.length})
            </div>
            <div>
              {items.map((item) => (
                <div
                  key={item.productId}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    borderBottom: '1px solid var(--border)',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#f1f5f9' }}>
                    <img src={'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=150&q=80'} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                      จำนวน: {item.quantity} · ราคาต่อหน่วย: {item.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => removeItem(item.productId)}
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', borderColor: '#ef4444', color: '#ef4444' }}
                  >
                    ลบ
                  </button>
                </div>
              ))}
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'right' }}>
              <button type="button" className="btn btn-outline" onClick={clear} style={{ fontSize: '0.9rem' }}>
                ล้างตะกร้าทั้งหมด
              </button>
            </div>
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>สรุปคำสั่งซื้อ</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="text-muted">ราคารวมปกติ</span>
              <span>{total.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 700 }}>
              <span>ยอดรวมทั้งสิ้น</span>
              <span style={{ color: 'var(--primary)' }}>
                {total.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}
              </span>
            </div>
            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
              ดำเนินการชำระเงิน
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
