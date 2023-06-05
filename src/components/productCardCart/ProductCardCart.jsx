import css from "./styles.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const ProductCardCart = ({
  product,
  onMinusBtn,
  onPlusBtn,
  onRemoveProduct,
}) => {
  const normolizeTotalPrice = parseFloat(product.totalPrice).toFixed(2);
  return (
    <div className={css.cardThumb}>
      <div className={css.imgThumb}>
        <img className={css.img} src={product.img} alt="Meal" />
      </div>
      <div>
        <p className={css.productName}>{product.name}</p>
        <p className={css.productPrice}>{normolizeTotalPrice} $</p>
        <div className={css.counterWrap}>
          <div className={css.countBtn} onClick={() => onMinusBtn(product)}>
            <AiFillMinusCircle size={22} color="#2196f3" />
          </div>
          <span className={css.counterNum}>{product.qty}</span>
          <div className={css.countBtn} onClick={() => onPlusBtn(product)}>
            <AiFillPlusCircle size={22} color="#2196f3" />
          </div>
        </div>
        <button
          className={css.removeBtn}
          onClick={() => onRemoveProduct(product._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
