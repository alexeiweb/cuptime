import { Promo } from "./Promo"
import { Products } from "./Products"
import { Route, Routes } from "react-router-dom"
import { Cart } from "./Cart"
import { Order } from "./Order"


export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={
          <>
            <Promo />
            <Products />
          </>
        }/>

        <Route path="/cart" element={
          <>
            <Cart />
            <Order />
          </>
        }>
          
        </Route>
      </Routes>
      

    
  </main>
  )
}