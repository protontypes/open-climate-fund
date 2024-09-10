'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    const basePath = process.env.NODE_ENV === 'production' ? '/open-climate-fund' : '';
    router.replace(basePath + window.location.pathname)
  }, [])

  return null
}