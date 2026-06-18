'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/store/appStore'
import { Check, Loader2 } from 'lucide-react'

export default function StatusPage() {
  const router = useRouter()
  const { jobId } = useAppStore()
  const [progress, setProgress] = useState(0)

  const steps = [
    { name: 'Prompt Enhancement', completed: true },
    { name: 'Copy Generation', completed: true },
    { name: 'Image Generation', completed: false, active: true },
    { name: 'Asset Composition', completed: false },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/result')
    }, 4000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 75) return prev
        return prev + Math.random() * 20
      })
    }, 500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Generating your campaign
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
            Job ID: {jobId}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-3 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-md transition-colors ${
                step.completed
                  ? 'bg-green-50 dark:bg-green-900/20'
                  : step.active
                  ? 'bg-primary/10 dark:bg-primary/20'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            >
              {step.completed && (
                <Check className="w-5 h-5 text-teal flex-shrink-0" />
              )}
              {step.active && !step.completed && (
                <Loader2 className="w-5 h-5 text-primary flex-shrink-0 animate-spin" />
              )}
              {!step.completed && !step.active && (
                <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex-shrink-0" />
              )}
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {step.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          This usually takes 30-60 seconds. Feel free to grab a coffee!
        </p>
      </div>
    </div>
  )
}
