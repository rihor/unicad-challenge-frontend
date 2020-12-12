import { NextPage } from "next"

import MapView from "../components/MapView"

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-screen bg-red-200">
      <main className="w-full h-full" role="main?">
        <MapView
          initialPlace={{
            zoom: 14,
            latitude: -22.8520714,
            longitude: -42.0330829,
          }}
          startLocation={{
            latitude: -22.917496,
            longitude: -42.0388765,
          }}
          destinationLocation={{
            latitude: -22.8863015,
            longitude: -42.0406875,
          }}
        />
        <div className="" role="container-list"></div>
      </main>
      <div className="" role="background-selected-delivery">
        <div className="" role="container-of-selected-delivery"></div>
      </div>
      <div className="" role="background-modal-create-delivery">
        <div className="" role="container-of-modal-create-delivery"></div>
      </div>
      <button
        className="fixed flex items-center justify-center bottom-12 right-12 w-16 h-16 bg-green-500 z-10 rounded-full"
        role="FAB">
        <svg
          className="w-12 h-12 text-yellow-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  )
}

export default Home
