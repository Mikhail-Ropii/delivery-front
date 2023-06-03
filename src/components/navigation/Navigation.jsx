import css from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        Cart
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        History
      </NavLink>
    </>
  );
};
