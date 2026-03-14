import { useState } from 'react'
import { FadeInSection } from '../components/common/FadeInSection'
import { Link } from 'react-router-dom'

const ISSUE_OPTIONS = [
  'เครื่องไม่ติด / เปิดไม่ขึ้น',
  'หน้าจอแตก / ทัชไม่ได้',
  'แบตหมดไว ชาร์จไม่เข้า',
  'กล้องไม่ชัด / ใช้งานไม่ได้',
  'ลำโพง / ไมค์มีปัญหา',
  'ปัญหาอื่น ๆ',
]

export function RepairBookingPage() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="page-container animate-fade-in">
        <div className="card glass" style={{ padding: '5rem', textAlign: 'center', maxWidth: '700px', marginInline: 'auto' }}>
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>📅</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>จองคิวสำเร็จ!</h1>
          <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            เราได้รับคำข้อมูลการจองคิวซ่อมของคุณแล้ว
            เจ้าหน้าที่ฝ่ายเทคนิคจะติดต่อกลับไปยังเบอร์โทรศัพท์ที่คุณระบุเพื่อยืนยันนัดหมายและประเมินราคาเบื้องต้น
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/" className="btn btn-primary">กลับไปหน้าหลัก</Link>
            <Link to="/products" className="btn btn-outline">ดูสินค้าแนะนำ</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container animate-fade-in" style={{ maxWidth: '1000px' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>จองคิวซ่อมมือถือ</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>รวดเร็ว ทันใจ โดยทีมช่างผู้เชี่ยวชาญ พร้อมอะไหล่แท้ระดับพรีเมียม</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
        <FadeInSection>
          <section className="card" style={{ padding: '2.5rem', height: '100%' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
              1. ข้อมูลเครื่องโทรศัพท์
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>ยี่ห้อและรุ่น</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input className="input" placeholder="เช่น iPhone" required />
                  <input className="input" placeholder="เช่น 15 Pro Max" required />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>อาการเสียที่พบ</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {ISSUE_OPTIONS.map((issue) => {
                    const active = selectedIssue === issue
                    return (
                      <button
                        key={issue}
                        type="button"
                        onClick={() => setSelectedIssue(issue)}
                        className={`glass ${active ? 'active-issue' : ''}`}
                        style={{
                          padding: '0.6rem 1.2rem',
                          fontSize: '0.85rem',
                          borderRadius: 'var(--radius-full)',
                          border: active ? '2px solid var(--primary)' : '1px solid var(--border)',
                          backgroundColor: active ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                          color: active ? 'var(--primary)' : 'var(--text-muted)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          fontWeight: active ? 600 : 400
                        }}
                      >
                        {issue}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>รายละเอียดเพิ่มเติม</label>
                <textarea
                  className="input"
                  rows={4}
                  placeholder="เล่าอาการเพิ่มเติม เช่น ตกน้ำ, จอลายเขียว..."
                  style={{ resize: 'none' }}
                />
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delayMs={200}>
          <section className="card" style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
              2. นัดหมายและข้อมูลติดต่อ
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem', flex: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>วันที่สะดวก</label>
                  <input type="date" className="input" required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>ช่วงเวลา</label>
                  <select className="input" required>
                    <option value="">เลือกช่วงเวลา</option>
                    <option>10:00 - 12:00 (เช้า)</option>
                    <option>13:00 - 16:00 (บ่าย)</option>
                    <option>16:00 - 19:00 (เย็น)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>ชื่อผู้แจ้งซ่อม</label>
                <input className="input" placeholder="ระบุชื่อจริงของคุณ" required />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>เบอร์โทรศัพท์</label>
                  <input className="input" placeholder="08x-xxx-xxxx" required />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>LINE ID (ถ้ามี)</label>
                  <input className="input" placeholder="@yourlineid" />
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }}
              >
                ยืนยันการจองคิวซ่อม
              </button>
              <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '1rem', textAlign: 'center' }}>
                💳 จองวันนี้ รับทันทีส่วนลดค่าแรง 10% เมื่อแสดงรหัสจองคิวที่ร้าน
              </p>
            </div>
          </section>
        </FadeInSection>
      </form>
    </div>
  )
}
