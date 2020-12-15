import { NextPage } from "next"
import { useRouter } from "next/router"
import { useCallback, useEffect, useMemo, useState } from "react"

import DeliveryListItem from "../components/DeliveryListItem"
import EmptyListDisplay from "../components/EmptyListDisplay"
import FloatingActionButton from "../components/FloatingActionButton"
import MapView from "../components/MapView"
import SelectedDelivery from "../components/SelectedDelivery"
import Spinner from "../components/Spinner"
import api from "../services/api"

const Home: NextPage = () => {
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [deliveries, setDeliveries] = useState<Array<Delivery>>([])
  const [selectedDelivery, setSelectedDelivery] = useState<Delivery | null>(
    null,
  )

  const router = useRouter()

  const [initialPlace] = useState(() => {
    if (globalThis.navigator && "geolocation" in globalThis.navigator) {
      globalThis.navigator.geolocation.getCurrentPosition((position) => {
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
      })
    }

    // center of São Paulo
    return {
      latitude: -23.5475,
      longitude: -46.63611,
    }
  })

  const mapViewArgs = useMemo(
    () => ({
      initialPlace: {
        zoom: 3,
        latitude: initialPlace.latitude,
        longitude: initialPlace.longitude,
      },
    }),
    [initialPlace],
  )

  const loadDeliveries = useCallback(async () => {
    setIsLoading(true)
    setIsEmpty(false)
    const response = await api.get<Array<Delivery>>("/deliveries")

    if (!response?.data) {
      return
    }

    if (Array.isArray(response.data) && response.data.length === 0) {
      setIsEmpty(true)
    }

    setDeliveries(response.data)
    setIsLoading(false)
  }, [])

  function handleUnselectDelivery() {
    setSelectedDelivery(null)
  }

  useEffect(() => {
    loadDeliveries()
  }, [])

  const handleFABClick = useCallback(() => {
    router.push("/create")
  }, [])

  return (
    <div className="w-full h-screen">
      <main className="w-full h-screen">
        <div
          className={`${selectedDelivery ? "h-4/6" : "h-2/6"} transition-all`}>
          <MapView
            initialPlace={mapViewArgs.initialPlace}
            delivery={selectedDelivery}
          />
        </div>
        <div
          className={`${
            selectedDelivery ? "hidden" : "block"
          } h-4/6 bg-yellow-200 overflow-y-auto`}>
          <ul className="w-full mb-28 pt-6 flex flex-col items-center space-y-4">
            {!isLoading ? (
              isEmpty ? (
                <EmptyListDisplay />
              ) : (
                deliveries.map((delivery) => (
                  <DeliveryListItem
                    key={delivery.id}
                    delivery={delivery}
                    setDelivery={setSelectedDelivery}
                  />
                ))
              )
            ) : (
              <Spinner />
            )}
          </ul>
        </div>
      </main>
      {selectedDelivery && (
        <div
          className={`fixed ${
            selectedDelivery ? "flex" : "hidden"
          } h-2/6 w-screen justify-center items-end top-2/3 left-0 `}
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
