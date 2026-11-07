import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'portfolio-theme'

/**
 * Manages light/dark theme.
 * - Reads localStorage for a saved preference
 * - Falls back to prefers-color-scheme
 * - Writes the chosen theme to <html data-theme="...">
 * - Persists changes to localStorage
 */
export function useTheme() {
  const getInitial = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'light' || saved === 'dark') return saved
    } catch { /* private browsing */ }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }

  const [theme, setTheme] = useState(getInitial)

  // Apply to <html> whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(STORAGE_KEY, theme) } catch { /* ignore */ }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
