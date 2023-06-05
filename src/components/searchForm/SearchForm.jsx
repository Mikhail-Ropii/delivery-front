import { MainButton } from "../mainButton/MainButton";
import css from "./styles.module.css";

export const SearchForm = ({ setSearchValue, searchData, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
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
              placeholder="+38 (093) 555-55-55"
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
    </>
  );
};
