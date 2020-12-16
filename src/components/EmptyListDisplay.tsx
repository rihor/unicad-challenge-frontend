const EmptyListDisplay: React.FC = () => (
  <div
    data-test="empty-list-display"
    className="flex flex-col items-center space-y-5 opacity-50">
    <svg
      className="flex-none h-24 w-24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-2xl">Não existem entregas cadastradas.</p>
  </div>
)

export default EmptyListDisplay
