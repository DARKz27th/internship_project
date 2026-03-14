import { useState } from 'react'
import { useCart } from '../hooks/useCart'
import { Link, useNavigate } from 'react-router-dom'

export function CheckoutPage() {
  const { items, total, clear } = useCart()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [submitted, setSubmitted] = useState(false)

  const hasItems = items.length > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!hasItems) return
    setSubmitted(true)
    clear()
  }

  if (submitted) {
    return (
      <div className="page-container animate-fade-in">
        <div className="card glass" style={{ padding: '5rem', textAlign: 'center', maxWidth: '700px', marginInline: 'auto' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>ขอบคุณสำหรับการสั่งซื้อ!</h1>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            เราได้รับคำสั่งซื้อของคุณแล้ว ระบบกำลังดำเนินการจัดเตรียมสินค้า
            คุณจะได้รับอีเมลยืนยันรายการแจ้งสถานะการจัดส่งเร็วๆ นี้
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary">กลับไปหน้าหลัก</Link>
            <Link to="/products" className="btn btn-outline">ช้อปสินค้าต่อ</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container animate-fade-in" style={{ maxWidth: '1100px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>ดำเนินการชำระเงิน</h1>
        <p className="text-muted">กรุณากรอกข้อมูลที่อยู่จัดส่งและเลือกวิธีชำระเงินเพื่อยืนยันรายการ</p>
      </div>

      {!hasItems && (
        <div className="card glass" style={{ padding: '4rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
          <h2 style={{ marginBottom: '1rem' }}>ไม่มีสินค้าในตะกร้า</h2>
          <button className="btn btn-primary" onClick={() => navigate('/products')}>ไปที่หน้ารายการสินค้า</button>
        </div>
      )}

      {hasItems && (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section className="card" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>1. ข้อมูลการจัดส่ง</h2>
              <div style={{ display: 'grid', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>ชื่อ</label>
                    <input className="input" placeholder="สมชาย" required />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>นามสกุล</label>
                    <input className="input" placeholder="ใจดี" required />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>เบอร์โทรศัพท์</label>
                  <input className="input" placeholder="08x-xxx-xxxx" required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>ที่อยู่จัดส่งโดยละเอียด</label>
                  <textarea className="input" placeholder="เลขที่บ้าน, ถนน, แขวง/ตำบล, เขต/อำเภอ..." rows={4} required style={{ resize: 'none' }} />
                </div>
              </div>
            </section>

            <section className="card" style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>2. วิธีการชำระเงิน</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <label className={`glass ${paymentMethod === 'cod' ? 'active-payment' : ''}`} style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', border: paymentMethod === 'cod' ? '2px solid var(--primary)' : '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                  <input type="radio" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  <div>
                    <div style={{ fontWeight: 600 }}>เก็บเงินปลายทาง (COD)</div>
                    <div className="text-muted" style={{ fontSize: '0.8rem' }}>ชำระเงินเมื่อได้รับสินค้าหน้าบ้าน</div>
                  </div>
                </label>
                <label className={`glass ${paymentMethod === 'bank' ? 'active-payment' : ''}`} style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', border: paymentMethod === 'bank' ? '2px solid var(--primary)' : '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                  <input type="radio" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                  <div>
                    <div style={{ fontWeight: 600 }}>โอนผ่านบัญชีธนาคาร</div>
                    <div className="text-muted" style={{ fontSize: '0.8rem' }}>แนบหลักฐานการโอนเงินเพื่อยืนยันรายการ</div>
                  </div>
                </label>
                <label className={`glass ${paymentMethod === 'card' ? 'active-payment' : ''}`} style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', border: paymentMethod === 'card' ? '2px solid var(--primary)' : '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                  <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <div>
                    <div style={{ fontWeight: 600 }}>บัตรเครดิต / เดบิต</div>
                    <div className="text-muted" style={{ fontSize: '0.8rem' }}>ชำระผ่านระบบที่ปลอดภัยสูงสุด (Stripe/Omise)</div>
                  </div>
                </label>
              </div>
            </section>
          </div>

          <aside className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.75rem' }}>รายการสั่งซื้อ</h2>
            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              {items.map((item) => (
                <div key={item.productId} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span className="text-muted">{item.name} × {item.quantity}</span>
                  <span style={{ fontWeight: 600 }}>{(item.price * item.quantity).toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-muted">ราคารวม (Subtotal)</span>
                <span>{total.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-muted">ค่าจัดส่ง</span>
                <span style={{ color: 'var(--success)', fontWeight: 600 }}>FREE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 800, marginTop: '0.5rem' }}>
                <span>รวมทั้งสิ้น</span>
                <span style={{ color: 'var(--primary)' }}>{total.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}</span>
              </div>
            </div>

            <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }} type="submit">
              ชำระเงินตอนนี้
            </button>
            <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '1rem', textAlign: 'center' }}>
              🛡️ ข้อมูลของคุณจะถูกเก็บเป็นความลับและประเมินผลอย่างปลอดภัย
            </p>
          </aside>
        </form>
      )}
    </div>
  )
}


