import { Link } from 'react-router-dom'

export function TrackRepairPage() {
  return (
    <div className="page-container animate-fade-in" style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>ติดตามงานซ่อม</h1>
        <p className="text-muted">กรอกเลขงานซ่อมหรือเบอร์โทรศัพท์เพื่อดูสถานะ (หน้าตัวอย่าง)</p>
      </div>

      <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <input className="input" placeholder="เลขงานซ่อม / เบอร์โทร" />
          <button className="btn btn-primary" type="button">ค้นหา</button>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            ตอนนี้ยังเป็น mock UI เหมือนโปรเจกเดิม (ยังไม่ได้ต่อ API)
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/repair" className="btn btn-outline">ไปที่จองคิวซ่อม</Link>
      </div>
    </div>
  )
}

