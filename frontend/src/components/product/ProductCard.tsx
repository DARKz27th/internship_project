import type { Product } from '../../types/Product'
import { Link } from 'react-router-dom'

type Props = {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div className="product-card-image">
          {!product.inStock && (
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              background: '#ef4444',
              color: 'white',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.75rem',
              fontWeight: 700,
              zIndex: 10
            }}>
              OUT OF STOCK
            </div>
          )}
          <img src={product.imageUrl} alt={product.name} loading="lazy" />
        </div>
      </Link>
      <div className="product-card-body">
        <div className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {product.brand} · {product.category}
        </div>
        <Link to={`/products/${product.id}`}>
          <h3 className="product-card-title">{product.name}</h3>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span className="product-card-price">
            {product.price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' })}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#f59e0b' }}>
            ★ {product.rating.toFixed(1)}
          </span>
        </div>

        <button
          className={`btn ${product.inStock ? 'btn-primary' : 'btn-outline'}`}
          style={{ width: '100%', fontSize: '0.85rem' }}
          type="button"
          onClick={() => onAddToCart?.(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'เพิ่มลงตะกร้า' : 'สินค้าหมด'}
        </button>
      </div>
    </div>
  )
}
