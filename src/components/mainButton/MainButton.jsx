import css from "./styles.module.css";

export const MainButton = ({ children, onClick, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={css.addBtn}
    >
      {children}
    </button>
  );
};
