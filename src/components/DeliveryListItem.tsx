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
      className="w-5/6 p-6 rounded hover:shadow-lg bg-green-50 border border-green-100 cursor-pointer">
      <h1 className="flex items-center space-x-4">
        <span>{delivery.start}</span>
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
        <span>{delivery.destination}</span>
      </h1>

      <div className="flex items-center justify-between">
        <h2>{delivery.client_name}</h2>

        <div>
          <i>{JSON.stringify(delivery.date)}</i>
        </div>
      </div>
    </li>
  )
}

export default DeliveryListItem
