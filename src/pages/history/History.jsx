import css from "./styles.module.css";
//Components
import { Container } from "../../components/container/Container";
import { SearchForm } from "../../components/searchForm/SearchForm";
import { useState } from "react";

export const History = () => {
  const initialValue = { email: "", phone: "" };
  const [searchData, setSearchData] = useState(initialValue);

  const hadleSearchOrders = () => {};

  console.log(searchData);
  return (
    <Container>
      <div className={css.pageContent}>
        <div className={css.inputWrap}>
          <SearchForm
            setSearchData={setSearchData}
            searchData={searchData}
            onSearch={hadleSearchOrders}
          />
        </div>
        <div className={css.historyWrap}>
          <p>dklfgj</p>
        </div>
      </div>
    </Container>
  );
};
