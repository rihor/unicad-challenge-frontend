import FloatingActionButton from "components/FloatingActionButton"
import { NextPage } from "next"
import { useMemo } from "react"

import DeliveryListItem from "../components/DeliveryListItem"
import MapView from "../components/MapView"

const Home: NextPage = () => {
  const mapViewArgs = useMemo(
    () => ({
      initialPlace: {
        zoom: 14,
        latitude: -22.8520714,
        longitude: -42.0330829,
      },
      startLocation: {
        latitude: -22.917496,
        longitude: -42.0388765,
      },
      destinationLocation: {
        latitude: -22.8863015,
        longitude: -42.0406875,
      },
    }),
    [],
  )

  return (
    <div className="w-full h-screen">
      <main className="w-full h-screen">
        <div className="h-2/6">
          <MapView
            initialPlace={mapViewArgs.initialPlace}
            startLocation={mapViewArgs.startLocation}
            destinationLocation={mapViewArgs.destinationLocation}
          />
        </div>
        <div className="h-4/6 bg-yellow-100">
          <ul className="w-full h-full pt-6 flex flex-col items-center space-y-4">
            <DeliveryListItem />
          </ul>
        </div>
      </main>
      <div
        className="fixed hidden justify-center items-end top-2/3 left-0 h-2/6 w-screen"
        role="background-selected-delivery">
        <div className="bg-red-200 w-full h-full">
          <ul className="w-full h-full pt-6 flex flex-col items-center space-y-4">
            <DeliveryListItem />
          </ul>
        </div>
      </div>
      <div className="" role="background-modal-create-delivery">
        <div className="" role="container-of-modal-create-delivery"></div>
      </div>
      <FloatingActionButton />
    </div>
  )
}

export default Home
