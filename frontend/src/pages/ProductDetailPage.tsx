import { useParams, useNavigate } from 'react-router-dom'
import { mockProducts } from '../data/products'
import { useCart } from '../hooks/useCart'
import { FadeInSection } from '../components/common/FadeInSection'

export function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const productId = Number(id)
  const product = mockProducts.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="page-container animate-fade-in">
        <div className="card glass" style={{ padding: '4rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>😕</div>
          <h2 style={{ marginBottom: '1rem' }}>ไม่พบสินค้าที่คุณต้องการ</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/products')}
          >
            กลับไปหน้าสินค้า
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container animate-fade-in">
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}
      >
        ← ย้อนกลับ
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}
      >
        <FadeInSection>
          <div className="product-card-image" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--glass-shadow)', overflow: 'hidden' }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </FadeInSection>

        <FadeInSection delayMs={200}>
          <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <div className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {product.brand} · {product.category}
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{product.name}</h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                {product.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}
              </span>
              <span className="glass" style={{ padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', color: '#f59e0b', fontWeight: 600, fontSize: '0.9rem' }}>
                ★ {product.rating.toFixed(1)} ({product.ratingCount} reviews)
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ flex: 2, padding: '1rem' }}
                onClick={() => addItem(product)}
                disabled={!product.inStock}
              >
                {product.inStock ? 'เพิ่มลงตะกร้า' : 'สินค้าหมดชั่วคราว'}
              </button>
              <button
                type="button"
                className="btn btn-outline"
                style={{ flex: 1 }}
                onClick={() => {
                  if (product.inStock) {
                    addItem(product)
                    navigate('/checkout')
                  }
                }}
                disabled={!product.inStock}
              >
                ซื้อเลย
              </button>
            </div>

            {!product.inStock && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '1rem', textAlign: 'center', fontWeight: 600 }}>
                * ขออภัย สินค้าชิ้นนี้กำลังขาดตลาด สามารถกดติดตามเพื่อรับแจ้งเตือนเมื่อสินค้ามาถึง
              </p>
            )}
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
