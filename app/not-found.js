'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/open-climate-fund' + window.location.pathname)
  }, [])

  return null
}