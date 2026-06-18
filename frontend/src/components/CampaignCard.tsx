import React from 'react'
import Link from 'next/link'

export interface Campaign {
  id: string
  name: string
  persona: 'professional' | 'witty' | 'urgent'
  date: string
}

interface CampaignCardProps extends Campaign {
  onClick?: () => void
}

export function CampaignCard({ name, persona, date, onClick }: CampaignCardProps) {
  const personaColors = {
    professional: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    witty: 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    urgent: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  }

  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all text-left w-full"
    >
      <h3 className="font-medium text-gray-900 dark:text-white mb-4 text-base">
        {name}
      </h3>
      <div className="flex items-center justify-between gap-3">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${personaColors[persona]}`}>
          {persona.charAt(0).toUpperCase() + persona.slice(1)}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {date}
        </span>
      </div>
    </button>
  )
}
