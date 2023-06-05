import { MainButton } from "../mainButton/MainButton";
import css from "./styles.module.css";

import { formatingPhone } from "../../helpers/formatingPhone";

export const SearchForm = ({
  setSearchData,
  searchData,
  onSearch,
  isFormValid,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formatedPhone = formatingPhone(value);
      setSearchData((prevData) => ({
        ...prevData,
        phone: formatedPhone,
      }));
      return;
    }
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={css.formWrap}>
      <form className={css.form}>
        <div>
          <label>
            Email:
            <input
              autoComplete="off"
              placeholder="example@gmail.com"
              required
              type="email"
              name="email"
              value={searchData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              autoComplete="off"
              placeholder="(093)5555555"
              required
              type="text"
              name="phone"
              value={searchData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
      <MainButton onClick={onSearch}>Search orders</MainButton>
      {!isFormValid && <p className={css.invalidMsg}>Fill all fields!</p>}
    </div>
  );
};
