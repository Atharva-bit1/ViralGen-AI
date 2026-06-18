'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/store/appStore'
import { useState, useEffect } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const { isDark, setIsDark } = useAppStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const darkMode = localStorage.getItem('darkMode') === 'true'
    setIsDark(darkMode)
    applyTheme(darkMode)
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
    applyTheme(newDarkMode)
  }

  const navItems = [
    { label: 'Landing', href: '/' },
    { label: 'Generate', href: '/dashboard' },
    { label: 'History', href: '/history' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  if (!mounted) return null

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-gray-900 dark:text-white">ViralGen AI</span>
        </Link>

        {/* Nav Tabs */}
        <div className="flex gap-6 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors pb-2 border-b-2 ${
                isActive(item.href)
                  ? 'text-gray-900 dark:text-white border-primary'
                  : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </nav>
  )
}
