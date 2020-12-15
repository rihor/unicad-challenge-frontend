import { FC } from "react"

interface Props {
  delivery: Delivery
  unselectDelivery(): void
}

const SelectedDelivery: FC<Props> = ({ delivery, unselectDelivery }) => {
  return (
    <article
      role="article"
      className="w-full h-full p-6 bg-green-50 cursor-pointer">
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

      <button type="submit" onClick={unselectDelivery}>
        <svg
          className="h-6 w-6 flex-none"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex items-center justify-between">
        <h2>{delivery.client_name}</h2>

        <div>
          <i>{delivery.date}</i>
        </div>
      </div>
    </article>
  )
}

export default SelectedDelivery
