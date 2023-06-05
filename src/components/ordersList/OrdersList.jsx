import { OrderCard } from "../orderCard/OrderCard";
import css from "./styles.module.css";

export const OrdersList = ({ orders }) => {
  return (
    <ul className={css.productsCardsWrap}>
      {orders.map((item) => (
        <li key={item._id}>
          <OrderCard order={item} />
        </li>
      ))}
    </ul>
  );
};
