import css from "./styles.module.css";
import { useSelector } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const Map = ({ userLocation, isLoaded }) => {
  const shopLocation = useSelector((state) => state.cart.shopLocation);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          options={{
            types: ["address"],
            componentRestrictions: { country: "ua" },
          }}
          id="map"
          mapContainerStyle={{
            height: "200px",
            width: "100%",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
          zoom={8}
          center={{
            lat: 50.445607,
            lng: 30.528437,
          }}
        >
          <Marker
            position={{
              lat: parseFloat(shopLocation.lat),
              lng: parseFloat(shopLocation.lng),
            }}
          />
          {userLocation && (
            <Marker
              position={{
                lat: parseFloat(userLocation.lat),
                lng: parseFloat(userLocation.lng),
              }}
            />
          )}
        </GoogleMap>
      )}
    </>
  );
};
