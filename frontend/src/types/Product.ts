export type Product = {
  id: number
  name: string
  description: string
  price: number
  category: 'อะไหล่มือถือ' | 'อุปกรณ์เสริม' | 'เครื่องมือช่าง' | 'บริการซ่อม'
  brand: string
  imageUrl: string
  rating: number
  ratingCount: number
  inStock: boolean
}
