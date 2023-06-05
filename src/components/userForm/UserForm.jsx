import css from "./styles.module.css";
import { Autocomplete } from "@react-google-maps/api";

export const UserForm = ({
  userData,
  setUserData,
  isFormValid = true,
  setLocation,
  isLoaded,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let autocomplete;

  const onLoad = (ac) => {
    autocomplete = ac;
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const places = autocomplete.getPlace();
      const lat = places.geometry.location.lat();
      const lng = places.geometry.location.lng();

      setLocation({ lat, lng });
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
              placeholder="+38 (093) 555-55-55"
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
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                  autoComplete="off"
                  // name="address"
                  type="text"
                  placeholder="Start typing your address"
                  className={css.autocomplete}
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
