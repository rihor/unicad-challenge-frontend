import { FC } from "react"

interface Props {
  delivery: Delivery
  setDelivery: (delivery: Delivery) => void
}

const DeliveryListItem: FC<Props> = ({ delivery, setDelivery }) => {
  function handleSelect() {
    setDelivery(delivery)
  }

  return (
    <li
      onClick={handleSelect}
      role="article"
      className="w-5/6 p-4 rounded bg-yellow-50 text-yellow-900 cursor-pointer">
      <h1 className="flex items-center space-x-4">
        <span className="font-bold text-xl">{delivery.start}</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
        <span className="font-bold text-xl">{delivery.destination}</span>
      </h1>

      <div className="mt-2 flex items-center justify-between">
        <h2 className="font-semibold">{delivery.client_name}</h2>

        <div>
          <i>{delivery.date}</i>
        </div>
      </div>
    </li>
  )
}

export default DeliveryListItem
