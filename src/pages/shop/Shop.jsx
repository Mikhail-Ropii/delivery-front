import { useEffect, useState } from "react";
import css from "./styles.module.css";
import { cartSlice } from "../../redux/cartReducer";
import { useSelector, useDispatch } from "react-redux";
import { ShopList } from "../../components/shopList/ShopList";
import { Products } from "../../components/products/Products";
import { Container } from "../../components/container/Container";
//Components

export const Shop = () => {
  const dispatch = useDispatch();
  const [currentShop, setCurrentShop] = useState(null);
  const cart = useSelector((state) => state.cart.cart);

  const handleSelectShop = (shop) => {
    setCurrentShop(shop._id);

    dispatch(cartSlice.actions.setShopLocation(shop.location));
  };

  useEffect(() => {
    if (cart.length !== 0) {
      setCurrentShop(cart[0].shop);
    }
  }, []);

  return (
    <Container>
      <div className={css.shopPageContent}>
        <div className={css.shopsWrap}>
          <p className={css.mainText}>Shops:</p>
          <ShopList currentShop={currentShop} onSelectShop={handleSelectShop} />
        </div>
        <div className={css.productsWrap}>
          {currentShop && <Products currentShop={currentShop} />}
        </div>
      </div>
    </Container>
  );
};
