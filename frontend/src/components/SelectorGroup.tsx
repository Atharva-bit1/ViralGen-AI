import React from 'react'

interface SelectorOption {
  value: string
  label: string
  icon?: React.ReactNode
}

interface SelectorGroupProps {
  label?: string
  options: SelectorOption[]
  value: string
  onChange: (value: string) => void
  columns?: number
}

export function SelectorGroup({
  label,
  options,
  value,
  onChange,
  columns = 3,
}: SelectorGroupProps) {
  const gridClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[columns] || 'grid-cols-3'

  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label className="text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div className={`grid ${gridClass} gap-3`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`p-3 rounded-md border-2 transition-all text-center font-medium text-sm ${
              value === option.value
                ? 'border-primary bg-primary bg-opacity-10 text-gray-900 dark:text-white'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-primary'
            }`}
          >
            {option.icon && <div className="mb-2 flex justify-center">{option.icon}</div>}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
