import { Noto_Naskh_Arabic } from 'next/font/google'
import { ReactNode } from 'react'

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic', 'latin', 'latin-ext']
})

export default function Arabic({ children }: { children: ReactNode }) {
  return (
    <div className={`${notoNaskhArabic.className} text-xl`}>{children}</div>
  )
}
