import { useSelector } from "react-redux";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import iconShop from "../../img/retail-store-icon.jpg";
import iconHome from "../../img/home.png";

export const Map = ({ userLocation, isLoaded }) => {
  const shopLocation = useSelector((state) => state.cart.shopLocation);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
          }}
          id="map"
          mapContainerStyle={{
            height: "220px",
            width: "100%",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
          zoom={9}
          center={{
            lat: 50.445607,
            lng: 30.528437,
          }}
        >
          <MarkerF
            icon={iconShop}
            position={{
              lat: parseFloat(shopLocation.lat),
              lng: parseFloat(shopLocation.lng),
            }}
          />
          {userLocation && (
            <MarkerF
              icon={iconHome}
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
