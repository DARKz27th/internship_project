type RepairPackage = {
  id: number
  name: string
  deviceType: string
  description: string
  price: number
  estimatedTime: string
}

export const repairPackages: RepairPackage[] = [
  {
    id: 1,
    name: 'แพ็กเกจเปลี่ยนหน้าจอแตก',
    deviceType: 'สมาร์ทโฟนทุกรุ่น',
    description: 'เปลี่ยนกระจก/จอ LCD แท้หรือเทียบเท่า รับประกันงานซ่อม 6 เดือน',
    price: 2490,
    estimatedTime: '2–3 ชั่วโมง',
  },
  {
    id: 2,
    name: 'แพ็กเกจเปลี่ยนแบตเตอรี่เสื่อม',
    deviceType: 'iPhone / Samsung / Android',
    description: 'แบตเตอรี่เกรด A แรงเต็ม ไม่เด้งเปอร์เซ็นต์ รับประกัน 6 เดือน',
    price: 890,
    estimatedTime: '45–60 นาที',
  },
  {
    id: 3,
    name: 'แพ็กเกจเครื่องร้อน / เครื่องช้า',
    deviceType: 'สมาร์ทโฟนและแท็บเล็ต',
    description: 'ตรวจเช็กระบบ ความร้อน ทำความสะอาดภายใน พร้อมรีเซ็ตระบบพื้นฐาน',
    price: 690,
    estimatedTime: '1–2 ชั่วโมง',
  },
]
