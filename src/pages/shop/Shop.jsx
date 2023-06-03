import { useState } from "react";
import { Outlet } from "react-router-dom";
import css from "./styles.module.css";
//Components

export const Shop = () => {
  return (
    <>
      <div className={css.shopsWrap}>
        <p className={css.mainText}>Shops:</p>
      </div>
      <Outlet></Outlet>
    </>
  );
};
