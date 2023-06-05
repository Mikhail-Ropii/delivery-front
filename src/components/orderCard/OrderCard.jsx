import css from "./styles.module.css";

export const OrderCard = ({ order }) => {
  return (
    <>
      <ul>
        {order.cart.map((item) => (
          <li key={item._id}>
            <div className={css.cardThumb}>
              <div className={css.imgThumb}>
                <img className={css.img} src={item.img} alt="Meal" />
              </div>
              <div>
                <p className={css.productName}>{item.name}</p>
                <p className={css.productPrice}>
                  {parseFloat(item.totalPrice).toFixed(2)} $
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>{order.sum}</div>
    </>
  );
};
