import { OrderCard } from "../orderCard/OrderCard";
import css from "./styles.module.css";

export const OrdersList = ({ orders }) => {
  return (
    <ul className={css.orderCardsWrap}>
      {orders.map((item) => (
        <li className={css.orderItem} key={item._id}>
          <OrderCard order={item} />
        </li>
      ))}
    </ul>
  );
};
