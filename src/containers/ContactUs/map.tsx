import React from "react";
import GoogleMapReact from "google-map-react";

const center = {
  lat: 25.214094336286703,
  lng: 55.27808708432581,
};

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

const MapComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDvEevtOp6b7BAboi2e351dVtxAwGwNhes" }}
        defaultCenter={center}
        defaultZoom={14}
      >
        <AnyReactComponent text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
