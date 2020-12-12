import Head from "next/head"

export default function Home() {
  return (
    <div className="">
      <div className="" role="main?">
        <div className="" role="map"></div>
        <div className="" role="container-list"></div>
      </div>
      <div className="" role="background-selected-delivery">
        <div className="" role="container-of-selected-delivery"></div>
      </div>
      <div className="" role="background-modal-create-delivery">
        <div className="" role="container-of-modal-create-delivery"></div>
      </div>
      <button className="" role="FAB">
        <svg
          className=""
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
