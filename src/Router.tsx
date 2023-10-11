import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../src/layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { CompleteOrderPage } from "./pages/OrderCompleted";
import { ConfirmOrderPage } from "./pages/OrderConfirmed";




export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/OrderCompleted" element={<CompleteOrderPage />} />
        <Route path="/OrderConfirmed" element={<ConfirmOrderPage />} />
      </Route>
    </Routes>
  )
}
