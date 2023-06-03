import { Routes, Route } from "react-router-dom";

//Components
import { Layout } from "./components/layout/Layout";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { History } from "./pages/history/History";
import { Products } from "./components/products/Products";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Shop />}>
          <Route path="/:shopId" element={<Products />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}

export default App;
