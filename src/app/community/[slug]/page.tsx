'use client'

import { useEffect, useState } from 'react'

export default function Community({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <div
      className={`fixed bottom-32 right-0 top-32 flex w-72 translate-x-full items-center justify-center rounded border bg-background transition-all ${
        show && 'right-8 !-translate-x-0'
      }`}
    >
      {slug}
    </div>
  )
}
