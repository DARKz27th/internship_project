import type { Product } from '../types/Product'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'หน้าจอ iPhone 13 แท้ศูนย์',
    description: 'อะไหล่หน้าจอสำหรับ iPhone 13 คุณภาพเทียบเท่าศูนย์ รับประกันงานซ่อม 3 เดือน',
    price: 4200,
    category: 'อะไหล่มือถือ',
    brand: 'Apple',
    imageUrl:
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    ratingCount: 132,
    inStock: true,
  },
  {
    id: 2,
    name: 'แบตเตอรี่ Samsung Galaxy A52',
    description: 'แบตเตอรี่แท้สำหรับ Galaxy A52 ความจุเต็ม เปลี่ยนแล้วจบในครั้งเดียว',
    price: 890,
    category: 'อะไหล่มือถือ',
    brand: 'Samsung',
    imageUrl:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    ratingCount: 87,
    inStock: true,
  },
  {
    id: 3,
    name: 'กระจกกันรอยเต็มจอ iPhone 14',
    description: 'กระจกนิรภัยขอบโค้ง เต็มจอ เคลือบกันรอยนิ้วมือ',
    price: 190,
    category: 'อุปกรณ์เสริม',
    brand: 'Focus',
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    ratingCount: 210,
    inStock: true,
  },
  {
    id: 4,
    name: 'ชุดไขควงช่างซ่อมมือถือ 32 in 1',
    description: 'ชุดไขควงแม่เหล็กสำหรับงานซ่อมมือถือโดยเฉพาะ หัวหลากหลายขนาด',
    price: 450,
    category: 'เครื่องมือช่าง',
    brand: 'Jakemy',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    ratingCount: 54,
    inStock: true,
  },
  {
    id: 5,
    name: 'บริการเปลี่ยนแบตเตอรี่ iPhone (หน้าร้าน)',
    description: 'รับเปลี่ยนแบตเตอรี่ iPhone ทุกรุ่น ใช้แบตเกรดสูง รับประกันงานซ่อม 6 เดือน',
    price: 890,
    category: 'บริการซ่อม',
    brand: 'E-Market Service',
    imageUrl:
      'https://images.unsplash.com/photo-1512061942530-e6e2ff6a3be8?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    ratingCount: 320,
    inStock: true,
  },
  {
    id: 6,
    name: 'สายชาร์จ USB-C to Lightning',
    description: 'สายชาร์จรองรับชาร์จเร็ว เหมาะสำหรับ iPhone/iPad รุ่นใหม่',
    price: 290,
    category: 'อุปกรณ์เสริม',
    brand: 'Anker',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    ratingCount: 102,
    inStock: true,
  },
]
