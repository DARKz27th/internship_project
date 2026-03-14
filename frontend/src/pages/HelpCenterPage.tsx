import { Link } from 'react-router-dom'

const faqs = [
  { q: 'จัดส่งกี่วัน?', a: 'โดยทั่วไป 1–3 วันทำการ (ขึ้นอยู่กับพื้นที่จัดส่ง)' },
  { q: 'รับประกันสินค้าไหม?', a: 'สินค้าบางรายการมีรับประกัน โปรดดูรายละเอียดหน้าสินค้า' },
  { q: 'จองคิวซ่อมแล้วต้องทำอะไรต่อ?', a: 'หลังส่งฟอร์ม เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันนัดหมาย' },
]

export function HelpCenterPage() {
  return (
    <div className="page-container animate-fade-in" style={{ maxWidth: '900px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>ศูนย์ช่วยเหลือ</h1>
        <p className="text-muted">คำถามที่พบบ่อยและช่องทางติดต่อ (หน้าตัวอย่าง)</p>
      </div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {faqs.map((f) => (
          <div key={f.q} className="card">
            <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{f.q}</div>
            <div className="text-muted">{f.a}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" className="btn btn-outline">กลับหน้าแรก</Link>
      </div>
    </div>
  )
}

