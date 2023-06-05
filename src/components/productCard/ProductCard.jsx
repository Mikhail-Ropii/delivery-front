import css from "./styles.module.css";

//Components
import { MainButton } from "../mainButton/MainButton";

export const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const isDisable = isInCart(product._id);
  return (
    <div className={css.cardThumb}>
      <div className={css.imgThumb}>
        <img className={css.img} src={product.img} alt="Meal" />
      </div>
      <p className={css.productName}>{product.name}</p>
      <p className={css.productPrice}>{product.price} $</p>
      <div className={css.btnWrap}>
        <div className={css.btn}>
          <MainButton disabled={isDisable} onClick={() => onAddToCart(product)}>
            {isDisable ? "In cart" : "Add to cart"}
          </MainButton>
        </div>
      </div>
    </div>
  );
};
