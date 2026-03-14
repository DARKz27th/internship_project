import { useMemo, useState } from 'react'
import { mockProducts } from '../data/products'
import { ProductCard } from '../components/product/ProductCard'
import { ProductFilterBar } from '../components/product/ProductFilterBar'
import { useCart } from '../hooks/useCart'

export function ProductListPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const { addItem } = useCart()

  const filtered = useMemo(() => {
    let list = [...mockProducts]

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    if (category) {
      list = list.filter((p) => p.category === category)
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [search, category, sortBy])

  return (
    <div className="page-container animate-fade-in">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>ค้นหาสินค้าที่คุณต้องการ</h1>
        <p className="text-muted" style={{ maxWidth: '600px', marginInline: 'auto' }}>
          เรามีอะไหล่คุณภาพสูงและอุปกรณ์เสริมมากมาย พร้อมบริการที่ครอบคลุมทุกความต้องการของคุณ
        </p>
      </div>

      <ProductFilterBar
        search={search}
        category={category}
        sortBy={sortBy}
        onChangeSearch={setSearch}
        onChangeCategory={setCategory}
        onChangeSortBy={setSortBy}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '2rem',
        }}
      >
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addItem(product)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card glass" style={{ padding: '4rem', textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ marginBottom: '0.5rem' }}>ไม่พบสินค้าที่ต้องการ</h3>
          <p className="text-muted">ลองค้นหาด้วยคำอื่นๆ หรือเปลี่ยนหมวดหมู่ดูนะคะ</p>
          <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => { setSearch(''); setCategory('') }}>
            ล้างการค้นหาทั้งหมด
          </button>
        </div>
      )}
    </div>
  )
}


