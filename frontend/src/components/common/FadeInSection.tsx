import { useEffect, useRef, useState, type ReactNode } from 'react'

type FadeInSectionProps = {
  children: ReactNode
  delayMs?: number
}

export function FadeInSection({ children, delayMs = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => setIsVisible(true), delayMs)
            } else {
              setIsVisible(true)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [delayMs])

  return (
    <div
      ref={ref}
      className={`fade-section${isVisible ? ' fade-section--visible' : ''}`}
    >
      {children}
    </div>
  )
}
