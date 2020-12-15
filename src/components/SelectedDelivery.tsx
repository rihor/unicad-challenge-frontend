import dayjs from "dayjs"
import { FC, useMemo } from "react"

interface Props {
  delivery: Delivery
  unselectDelivery(): void
}

const SelectedDelivery: FC<Props> = ({ delivery, unselectDelivery }) => {
  const formattedDate = useMemo(() => {
    return dayjs(delivery.date).format("DD/MM/YYYY")
  }, [delivery])

  return (
    <article
      role="article"
      className="w-full h-full p-6 bg-green-50 cursor-pointer">
      <div className="sm:w-8/12 w-10/12 mx-auto">
        <h1 className="flex items-center space-x-4">
          <span className="text-green-800 font-bold text-xl">
            {delivery.start}
          </span>
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
          <span className="text-green-800 font-bold text-xl">
            {delivery.destination}
          </span>
        </h1>

        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-green-800 opacity-80">
            {delivery.client_name}
          </h2>

          <i className="text-green-800 opacity-80">{formattedDate}</i>
        </div>
      </div>

      <button
        type="submit"
        className="absolute flex items-center justify-center bottom-8 left-8 w-16 h-16 bg-red-200 z-10 rounded-full focus:outline-none"
        onClick={unselectDelivery}>
        <svg
          className="h-8 w-8 flex-none text-red-400"
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
    </article>
  )
}

export default SelectedDelivery
