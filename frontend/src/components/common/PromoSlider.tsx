import { useEffect, useState } from 'react'

type Slide = {
  id: number
  title: string
  subtitle: string
  accent: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'ดีลอะไหล่คอมพ์ ลดสูงสุด 40%',
    subtitle: 'เมนบอร์ด, การ์ดจอ, PSU จากร้านค้าชั้นนำ',
    accent: 'อะไหล่คอมพิวเตอร์',
  },
  {
    id: 2,
    title: 'อุปกรณ์ตกแต่งบ้าน ราคาพิเศษ',
    subtitle: 'โซฟา, โต๊ะทำงาน, ชั้นวางของ',
    accent: 'ของแต่งบ้าน',
  },
  {
    id: 3,
    title: 'แก็ดเจ็ตใหม่ล่าสุด พร้อมส่ง',
    subtitle: 'สมาร์ทวอทช์, หูฟัง, อุปกรณ์เสริมมือถือ',
    accent: 'แก็ดเจ็ต',
  },
]

const AUTO_PLAY_INTERVAL = 5000

export function PromoSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="slider" aria-roledescription="carousel">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slider-slide">
            <div className="slider-content">
              <span className="slider-accent">{slide.accent}</span>
              <h2 className="slider-title">{slide.title}</h2>
              <p className="slider-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots" aria-label="ตัวเลือกสไลด์โปรโมชั่น">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`slider-dot${index === activeIndex ? ' slider-dot--active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`ไปยังสไลด์ที่ ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
