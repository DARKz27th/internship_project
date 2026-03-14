type Props = {
  search: string
  category: string
  sortBy: string
  onChangeSearch: (value: string) => void
  onChangeCategory: (value: string) => void
  onChangeSortBy: (value: string) => void
}

export function ProductFilterBar({
  search,
  category,
  sortBy,
  onChangeSearch,
  onChangeCategory,
  onChangeSortBy,
}: Props) {
  return (
    <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
      <div style={{ flex: 1, minWidth: '250px', position: 'relative' }}>
        <input
          className="input"
          placeholder="ค้นหาชื่อสินค้า แบรนด์ หรือรุ่น..."
          value={search}
          onChange={(e) => onChangeSearch(e.target.value)}
          style={{ paddingLeft: '1rem' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <select
          className="select"
          value={category}
          onChange={(e) => onChangeCategory(e.target.value)}
          style={{ minWidth: '160px' }}
        >
          <option value="">หมวดหมู่ทั้งหมด</option>
          <option value="อะไหล่มือถือ">อะไหล่มือถือ</option>
          <option value="อุปกรณ์เสริม">อุปกรณ์เสริม</option>
          <option value="เครื่องมือช่าง">เครื่องมือช่าง</option>
          <option value="บริการซ่อม">บริการซ่อม</option>
        </select>

        <select
          className="select"
          value={sortBy}
          onChange={(e) => onChangeSortBy(e.target.value)}
          style={{ minWidth: '160px' }}
        >
          <option value="latest">เรียงตามล่าสุด</option>
          <option value="price-asc">ราคาต่ำ - สูง</option>
          <option value="price-desc">ราคาสูง - ต่ำ</option>
          <option value="rating">เรตติ้งสูงสุด</option>
        </select>
      </div>
    </div>
  )
}
