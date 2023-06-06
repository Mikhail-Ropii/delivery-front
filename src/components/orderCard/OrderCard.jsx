import css from "./styles.module.css";

export const OrderCard = ({ order }) => {
  return (
    <div className={css.orderWrap}>
      <ul className={css.mealWrap}>
        {order.cart.map((item) => (
          <li key={item._id}>
            <div className={css.imgThumb}>
              <img className={css.img} src={item.img} alt="Meal" />
            </div>
            <div>
              <p className={css.productName}>{item.name}</p>
              <p className={css.productPrice}>
                {item.price} x {item.qty} ={" "}
                {parseFloat(item.totalPrice).toFixed(2)} $
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className={css.sumText}>
        Total sum:{" "}
        <span className={css.sumNumber}>
          {parseFloat(order.sum).toFixed(2)} $
        </span>{" "}
      </p>
    </div>
  );
};
