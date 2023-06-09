import css from "./styles.module.css";
import { Autocomplete } from "@react-google-maps/api";

import { formatingPhone } from "../../helpers/formatingPhone";
import { useState } from "react";

export const UserForm = ({
  userData,
  setUserData,
  isFormValid,
  setLocation,
  isLoaded,
}) => {
  const [searchResult, setSearchResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formatedPhone = formatingPhone(value);
      setUserData((prevData) => ({
        ...prevData,
        phone: formatedPhone,
      }));
      return;
    }
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLoad = (autocomplete) => {
    setSearchResult(autocomplete);
  };

  const onPlaceChanged = () => {
    if (searchResult) {
      const places = searchResult.getPlace();
      if (places.geometry === undefined) {
        return;
      }
      const lat = places.geometry.location.lat();
      const lng = places.geometry.location.lng();
      setLocation({ lat, lng });
      setUserData((prevData) => ({
        ...prevData,
        address: places.formatted_address,
      }));
    }
  };

  return (
    <>
      <form className={css.form}>
        <div>
          <label>
            Name:
            <input
              autoComplete="off"
              placeholder="Mike"
              required
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              autoComplete="off"
              placeholder="example@gmail.com"
              required
              type="email"
              name="email"
              value={userData.email}
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
              value={userData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        {isLoaded && (
          <>
            <label>
              Address:
              <Autocomplete
                options={{
                  types: ["address"],
                  componentRestrictions: { country: "ua" },
                }}
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
              >
                <input
                  autoComplete="off"
                  name="address"
                  type="text"
                  placeholder="Start typing your address in Kiev region"
                  className={css.autocomplete}
                  onChange={handleChange}
                  value={userData.address}
                />
              </Autocomplete>
            </label>
          </>
        )}
      </form>
      {!isFormValid && <p className={css.invalidMsg}>Fill all fields!</p>}
    </>
  );
};
