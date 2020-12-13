import { FC } from "react"

const DeliveryListItem: FC = () => {
  return (
    <li
      role="article"
      className="w-5/6 p-6 rounded hover:shadow-lg bg-green-50 border border-green-100">
      <h1 className="flex items-center space-x-4">
        <span>rua da restinga</span>
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
        <span>praia do siqueira</span>
      </h1>

      <div className="flex items-center justify-between">
        <h2>Pedro Pinho</h2>

        <div>
          <i>12/08/2020</i>
        </div>
      </div>
    </li>
  )
}

export default DeliveryListItem
