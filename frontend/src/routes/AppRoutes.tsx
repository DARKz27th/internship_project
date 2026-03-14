import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '../components/layout/PublicLayout'
import { HomePage } from '../pages/HomePage'
import { ProductListPage } from '../pages/ProductListPage'
import { ProductDetailPage } from '../pages/ProductDetailPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { RepairBookingPage } from '../pages/RepairBookingPage'
import { TrackRepairPage } from '../pages/TrackRepairPage'
import { HelpCenterPage } from '../pages/HelpCenterPage'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/repair" element={<RepairBookingPage />} />
          <Route path="/track-repair" element={<TrackRepairPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
