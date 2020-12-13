import { FC } from "react"

const FloatingActionButton: FC = () => {
  return (
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
  )
}

export default FloatingActionButton
