import { useSelector } from "react-redux";
import css from "./styles.module.css";
import { useState } from "react";

//Components
import { Container } from "../../components/container/Container";
import { UserForm } from "../../components/userForm/UserForm";
import { CartBlock } from "../../components/cartBlock/CartBlock";
import { MainButton } from "../../components/mainButton/MainButton";
import { Map } from "../../components/map/Map";
import { useJsApiLoader } from "@react-google-maps/api";

const { REACT_APP_MAPS_API_KEY } = process.env;
const libraries = ["places"];

export const Cart = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const [location, setLocation] = useState({});
  const [userData, setUserData] = useState(initialValue);
  const sum = useSelector((state) => state.cart.sum);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_APP_MAPS_API_KEY,
    libraries: libraries,
  });

  return (
    <Container>
      <div className={css.pageContent}>
        <div className={css.mainContentWrap}>
          <div className={css.userWrap}>
            <Map isLoaded={isLoaded} userLocation={location} />
            <UserForm
              userData={userData}
              setUserData={setUserData}
              setLocation={setLocation}
              isLoaded={isLoaded}
            />
          </div>
          <div className={css.productsWrap}>{<CartBlock />}</div>
        </div>
        <div className={css.orderResume}>
          <p className={css.mainText}>Total price: {sum.toFixed(2)} $</p>
          <MainButton>Submit</MainButton>
        </div>
      </div>
    </Container>
  );
};
