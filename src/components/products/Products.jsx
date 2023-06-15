import css from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../redux/cartReducer";
import { useGetProductsByShopIdQuery } from "../../redux/shopsAPI";
import { useMediaQuery } from "react-responsive";

//Components
import { ProductCard } from "../productCard/ProductCard";
import HomeImage from "../../img/Online_Shoping.jpg";

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

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      {data ? (
        <ul className={css.productsCardsWrap}>
          {data.map((item) => (
            <li className={css.productCardItem} key={item._id}>
              <ProductCard
                isInCart={isInCart}
                product={item}
                onAddToCart={handleAddToCart}
              />
            </li>
          ))}
        </ul>
      ) : (
        <>
          {isMobile && (
            <p className={css.startText}>
              Choose you favourite restoran and start shoping!
            </p>
          )}
          <img className={css.homeImg} src={HomeImage} alt="Delivery" />
        </>
      )}
    </>
  );
};
