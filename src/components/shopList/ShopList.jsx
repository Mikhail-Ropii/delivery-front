import css from "./styles.module.css";
import { useGetShopsListQuery } from "../../redux/shopsAPI";

export const ShopList = () => {
  const { data } = useGetShopsListQuery();

  return (
    <div className={css.shopsWrap}>
      {data.map((item) => (
        <div className={css.shopBtn}></div>
      ))}
    </div>
  );
};
