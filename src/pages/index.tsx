import FloatingActionButton from "components/FloatingActionButton"
import SelectedDelivery from "components/SelectedDelivery"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useState } from "react"

import DeliveryListItem from "../components/DeliveryListItem"
import MapView from "../components/MapView"
import api from "../services/api"

interface Props {
  staticDeliveries: Array<Delivery>
}

const Home: NextPage<Props> = ({ staticDeliveries }) => {
  const [deliveries, setDeliveries] = useState(staticDeliveries || [])
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(
    null,
  )

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

  const loadDeliveries = useCallback(async () => {
    const response = await api.get<Array<Delivery>>("/deliveries")

    if (!response?.data) {
      return
    }

    setDeliveries(response.data)
  }, [])

  function handleUnselectDelivery() {
    setSelectedDelivery(null)
  }

  useEffect(() => {
    loadDeliveries()
  }, [])

  const handleFABClick = useCallback(() => {
    useRouter().push("/create")
  }, [])

  return (
    <div className="w-full h-screen">
      <main className="w-full h-screen">
        <div
          className={`${selectedDelivery ? "h-4/6" : "h-2/6"} transition-all`}>
          <MapView
            initialPlace={mapViewArgs.initialPlace}
            startLocation={mapViewArgs.startLocation}
            destinationLocation={mapViewArgs.destinationLocation}
          />
        </div>
        <div className="h-4/6 bg-yellow-100 overflow-y-auto">
          <ul className="w-full h-full mb-72 pt-6 flex flex-col items-center space-y-4">
            {deliveries.map((delivery) => (
              <DeliveryListItem
                key={delivery.id}
                delivery={delivery}
                setDelivery={setSelectedDelivery}
              />
            ))}
          </ul>
        </div>
      </main>
      {selectedDelivery && (
        <div
          className={`fixed ${
            selectedDelivery ? "flex" : "hidden"
          } justify-center items-end top-2/3 left-0 h-2/6 w-screen`}
          role="background-selected-delivery">
          <div className="bg-red-200 w-full h-full">
            <SelectedDelivery
              delivery={selectedDelivery}
              unselectDelivery={handleUnselectDelivery}
            />
          </div>
        </div>
      )}

      <FloatingActionButton onClick={handleFABClick} />
    </div>
  )
}

export default Home
