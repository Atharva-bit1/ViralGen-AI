'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAppStore } from '@/store/appStore'
import { Button } from '@/components/Button'
import { Copy, Download, RotateCcw, Image as ImageIcon } from 'lucide-react'

export default function ResultPage() {
  const router = useRouter()
  const { persona, platform, variations, currentVariation, setCurrentVariation } = useAppStore()
  const [copied, setCopied] = useState<string | null>(null)

  const mockContent = {
    copy: 'Transform your fitness journey with our premium protein shake. Packed with 25g of pure protein, zero sugar, and endless flavor possibilities. Your workout just got serious. 💪',
    prompt:
      'premium protein shake, fitness nutrition, 25g protein, zero sugar, fitness lifestyle, modern design, vibrant colors',
  }

  const handleCopy = (type: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  const handleDownload = (type: string) => {
    // Placeholder for download functionality
    alert(`Downloading ${type}...`)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Your campaign is ready
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Preview */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-12 flex items-center justify-center min-h-96">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Generated Image</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {/* Marketing Copy */}
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                Marketing copy
              </label>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-2 text-gray-900 dark:text-white text-sm leading-relaxed">
                {mockContent.copy}
              </div>
              <button
                onClick={() => handleCopy('copy', mockContent.copy)}
                className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied === 'copy' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Enhanced Prompt */}
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                Enhanced prompt
              </label>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 mb-2 font-mono text-xs text-gray-900 dark:text-white max-h-32 overflow-y-auto">
                {mockContent.prompt}
              </div>
              <button
                onClick={() => handleCopy('prompt', mockContent.prompt)}
                className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied === 'prompt' ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Persona */}
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">
                Brand persona
              </label>
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 text-gray-900 dark:text-white text-sm capitalize">
                {persona}
              </div>
            </div>
          </div>
        </div>

        {/* Variations */}
        {variations > 1 && (
          <div className="mb-12">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Other variations
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {Array.from({ length: variations }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentVariation(i)}
                  className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    currentVariation === i
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Variation {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            onClick={() => handleDownload('asset')}
            className="flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Asset
          </Button>
          <Button
            onClick={() => handleDownload('image')}
            className="flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Image
          </Button>
          <Button
            onClick={() =>
              handleCopy('caption', 'Transform your fitness journey with our premium protein shake...')
            }
            variant="secondary"
            className="flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Caption
          </Button>
          <Button
            onClick={() => router.push('/dashboard')}
            variant="secondary"
            className="flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            New
          </Button>
        </div>
      </div>
    </div>
  )
}
