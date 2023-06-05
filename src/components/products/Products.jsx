import css from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/cartReducer";
import { useGetProductsByShopIdQuery } from "../../redux/shopsAPI";
//Components
import { ProductCard } from "../productCard/ProductCard";

export const Products = ({ currentShop }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const { data } = useGetProductsByShopIdQuery(currentShop);

  const handleAddToCart = (product) => {
    const totalPrice = product.price;
    dispatch(cartSlice.actions.addToCart({ ...product, qty: 1, totalPrice }));
    dispatch(cartSlice.actions.changeSum());
  };

  const isInCart = (id) => {
    return cart.some((obj) => obj._id === id);
  };

  return (
    <>
      {data && (
        <ul className={css.productsCardsWrap}>
          {data.map((item) => (
            <li key={item._id}>
              <ProductCard
                isInCart={isInCart}
                product={item}
                onAddToCart={handleAddToCart}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
