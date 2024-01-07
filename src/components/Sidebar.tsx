import { Sparkle } from 'lucide-react'
import Link from 'next/link'
import SupportDeveloper from './SupportDeveloper'

const { version } = require('../../package.json')

export default function Sidebar() {
  return (
    <nav className="fixed left-0 flex h-screen w-72 -translate-x-full flex-col border-r bg-background transition-all md:translate-x-0">
      <Link
        className="group relative flex min-h-24 items-center justify-center border-b text-2xl font-bold transition"
        href="/"
      >
        Darulhikmet
        <Sparkle className="ml-2 hover:animate-spin" />
        <span className="absolute bottom-0 right-0 text-xs text-muted-foreground opacity-0 transition-all group-hover:opacity-100">
          {version}
        </span>
      </Link>
      <div className="sidebar-scroll flex cursor-pointer flex-col overflow-y-auto px-4 py-8 text-sm font-medium text-muted-foreground">
        {Array(24)
          .fill(0)
          .map(() => {
            return (
              <>
                <Link
                  className="rounded px-4 py-2 hover:bg-muted hover:text-white"
                  href="/community/bekir-develi"
                >
                  Bekir Develi
                </Link>
                <Link
                  className="rounded px-4 py-2 hover:bg-muted hover:text-white"
                  href="/community/altay-cem-meric"
                >
                  Altay Cem Meriç
                </Link>
                <Link
                  className="rounded px-4 py-2 hover:bg-muted hover:text-white"
                  href="/community/yusuf-kaplan"
                >
                  Yusuf Kaplan
                </Link>
                <Link
                  className="rounded px-4 py-2 hover:bg-muted hover:text-white"
                  href="/community/fulya-ozturk"
                >
                  Fulya Öztürk
                </Link>
                <Link
                  className="rounded px-4 py-2 hover:bg-muted hover:text-white"
                  href="/community/saliha-erdim"
                >
                  Saliha Erdim
                </Link>
              </>
            )
          })}
      </div>
      <div className="mt-auto flex min-h-24 items-center justify-center border-t">
        <SupportDeveloper />
      </div>
    </nav>
  )
}
