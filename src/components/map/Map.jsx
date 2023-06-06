import { useSelector } from "react-redux";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

export const Map = ({ userLocation, isLoaded }) => {
  const shopLocation = useSelector((state) => state.cart.shopLocation);

  return (
    <>
      {isLoaded && (
        <GoogleMap
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
          <MarkerF
            position={{
              lat: parseFloat(shopLocation.lat),
              lng: parseFloat(shopLocation.lng),
            }}
          />
          {userLocation && (
            <MarkerF
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
