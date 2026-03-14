import { useState, type ReactNode, useMemo, useCallback } from 'react'
import { CartContext } from './CartContextStore'
import type { Product } from '../types/Product'

type CartItem = {
  productId: number
  name: string
  price: number
  quantity: number
}

export type CartContextValue = {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: number) => void
  clear: () => void
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id)

      if (existing) {
        return prev.map((i) =>
          i.productId === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
        },
      ]
    })
  }, [])

  const removeItem = useCallback((productId: number) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId))
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const { total, itemCount } = useMemo(() => {
    const totalValue = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    const count = items.reduce((sum, item) => sum + item.quantity, 0)

    return { total: totalValue, itemCount: count }
  }, [items])

  const value: CartContextValue = {
    items,
    total,
    itemCount,
    addItem,
    removeItem,
    clear,
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}