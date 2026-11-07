import { useState, useEffect, useRef } from 'react'

const ROLES = [
  'CSE Student',
  'Full-Stack Developer',
  'Open Source Enthusiast',
  'Problem Solver',
  'Creative Technologist',
]

export function useTypewriter(delay = 120, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentRole = ROLES[roleIdx]

    const tick = () => {
      if (!deleting) {
        if (charIdx < currentRole.length) {
          setDisplayed(currentRole.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
          timeoutRef.current = setTimeout(tick, delay)
        } else {
          timeoutRef.current = setTimeout(() => setDeleting(true), pause)
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(currentRole.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
          timeoutRef.current = setTimeout(tick, delay / 2)
        } else {
          setDeleting(false)
          setRoleIdx((r) => (r + 1) % ROLES.length)
          timeoutRef.current = setTimeout(tick, 300)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 60)
    return () => clearTimeout(timeoutRef.current)
  }, [charIdx, deleting, roleIdx, delay, pause])

  return displayed
}
