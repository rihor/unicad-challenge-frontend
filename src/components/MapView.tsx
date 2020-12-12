import React, { useCallback, useState } from "react"

import {
  GoogleMap,
  LoadScript,
  GoogleMapProps,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api"

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""

interface Props extends GoogleMapProps {
  initialPlace: { latitude: number; longitude: number; zoom: number }
  startLocation: { latitude: number; longitude: number }
  destinationLocation: { latitude: number; longitude: number }
}

const MapView: React.FC<Props> = ({
  initialPlace,
  startLocation,
  destinationLocation,
}) => {
  const [directionsResult, setDirectionsResult] = useState<null | any>(null)

  const center = {
    lat: initialPlace.latitude,
    lng: initialPlace.longitude,
  }

  const directionsCallback = (response: any) => {
    if (response !== null && response.status === "OK") {
      setDirectionsResult(response)
    }
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        clickableIcons={false}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: false,
        }}
        mapContainerStyle={{
          height: "100%",
          width: "100%",
        }}
        zoom={initialPlace.zoom}
        center={center}>
        <DirectionsService
          options={{
            destination: `${startLocation.latitude},${startLocation.longitude}`,
            origin: `${destinationLocation.latitude},${destinationLocation.longitude}`,
            travelMode: "DRIVING",
          }}
          callback={directionsCallback}
        />

        {directionsResult !== null && (
          <DirectionsRenderer
            options={{
              directions: directionsResult,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapView
