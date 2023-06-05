import css from "./styles.module.css";
import { useSelector } from "react-redux";
import { useGetShopsListQuery } from "../../redux/shopsAPI";

export const ShopList = ({ onSelectShop, currentShop }) => {
  const { data } = useGetShopsListQuery();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item._id} className={css.shopBtnWrap}>
              <button
                disabled={(cart.length !== 0) & (currentShop !== item._id)}
                className={`${css.shopBtn} ${
                  currentShop === item._id ? css.shopBtnActive : ""
                }`}
                onClick={() => onSelectShop(item)}
                type="button"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
