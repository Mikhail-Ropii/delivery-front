import { useDispatch, useSelector } from "react-redux";
import css from "./styles.module.css";
import { cartSlice } from "../../redux/cartReducer";
//Components
import { ProductCardCart } from "../productCardCart/ProductCardCart";

export const CartBlock = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleMinusBtn = (product) => {
    if (product.qty > 1) {
      dispatch(cartSlice.actions.minusQty(product._id));
      dispatch(cartSlice.actions.changeSum());
    }
  };
  const handlePlusBtn = (product) => {
    dispatch(cartSlice.actions.plusQty(product._id));
    dispatch(cartSlice.actions.changeSum());
  };
  const handleRemoveProduct = (id) => {
    dispatch(cartSlice.actions.removeFromCart(id));
    dispatch(cartSlice.actions.changeSum());
  };

  return (
    <>
      {cart.length !== 0 ? (
        <ul className={css.productsCardsWrap}>
          {cart.map((item) => (
            <li className={css.productListItem} key={item._id}>
              <ProductCardCart
                product={item}
                onMinusBtn={handleMinusBtn}
                onPlusBtn={handlePlusBtn}
                onRemoveProduct={handleRemoveProduct}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.emptyText}>Cart is empty</p>
      )}
    </>
  );
};
