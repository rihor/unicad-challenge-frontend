import React, { useCallback, useMemo, useState } from "react"

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
  delivery: Delivery | null
}

const MapView: React.FC<Props> = ({ initialPlace, delivery }) => {
  const [directionsResult, setDirectionsResult] = useState<null | any>(null)

  const initialPosition = useMemo(
    () => ({ lat: initialPlace.latitude, lng: initialPlace.longitude }),
    [],
  )

  const directionsCallback = useCallback((response: any) => {
    if (response !== null && response.status === "OK") {
      setDirectionsResult(response)
    }
  }, [])

  const googleMapsOptions = useMemo(
    () => ({
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
    }),
    [],
  )

  const mapContainerStyle = useMemo(
    () => ({
      height: "100%",
      width: "100%",
    }),
    [],
  )

  const directionsServicesOptions = useMemo(
    () => ({
      destination: delivery?.destination,
      origin: delivery?.start,
      travelMode: "DRIVING",
    }),
    [delivery],
  )

  const directionsRendererOptions = useMemo(
    () => ({ directions: directionsResult }),
    [directionsResult],
  )

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        clickableIcons={false}
        options={googleMapsOptions}
        mapContainerStyle={mapContainerStyle}
        zoom={initialPlace.zoom}
        center={initialPosition}>
        {delivery && (
          <DirectionsService
            options={directionsServicesOptions}
            callback={directionsCallback}
          />
        )}

        {directionsResult !== null && delivery && (
          <DirectionsRenderer options={directionsRendererOptions} />
        )}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapView
