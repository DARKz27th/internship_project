import { createContext } from 'react'
import type { CartContextValue } from './CartContext.tsx'

export const CartContext = createContext<CartContextValue | null>(null)

