'use client'

import { Sparkle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import SupportDeveloper from '@/components/SupportDeveloper'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import OtherMenu from './OtherMenu'

import { useSidebarStore } from '@/stores/useSidebarStore'

import { cn } from '@/lib/utils'

const { version } = require('package.json')

export default function Sidebar() {
  const [communities, setCommunities] = useState([])

  const { isOpen } = useSidebarStore()

  const pathname = usePathname()

  async function fetchCommunities() {
    const result = await fetch('/api/getAllCommunities')

    setCommunities(await result.json())
  }

  useEffect(() => {
    fetchCommunities()
  }, [])

  return (
    <aside
      className={cn(
        'fixed left-0 z-20 flex h-screen w-full max-w-72 -translate-x-full flex-col border-r bg-background transition-all md:translate-x-0',
        isOpen && 'translate-x-0'
      )}
    >
      <Link
        className="group relative flex min-h-20 items-center justify-center border-b text-2xl font-bold md:min-h-24"
        href="/"
      >
        Darulhikmet
        <Sparkle className="ml-2 hover:animate-spin" />
        <span className="absolute bottom-0 right-0 text-xs text-muted-foreground opacity-0 transition-all group-hover:opacity-100">
          {version}
        </span>
      </Link>
      <ScrollArea className="h-full">
        <div className="flex flex-col px-4 py-4 text-sm font-medium text-muted-foreground md:px-6 md:py-6">
          {communities.length > 0
            ? communities.map((item: Community, i: number) => (
                <Link
                  className={cn(
                    'relative flex items-center rounded px-4 py-2 hover:bg-muted/25 hover:text-foreground',
                    `/community/${item.name.machineFriendly}` === pathname &&
                      '!bg-muted text-foreground'
                  )}
                  href={`/community/${item.name.machineFriendly}`}
                  key={i}
                >
                  <span className="relative size-5 min-w-5 overflow-hidden rounded-full bg-muted">
                    <Image
                      className="object-cover"
                      src={item.avatar}
                      alt={`${item.name.humanReadable} topluluk resmi`}
                      fill
                    />
                  </span>
                  <span className="ml-2">{item.name.humanReadable}</span>
                  {/* <Badge className="absolute right-2">Yeni</Badge> */}
                </Link>
              ))
            : Array(8)
                .fill(0)
                .map((_, i) => (
                  <div className="flex items-center px-4 py-2" key={i}>
                    <Skeleton className="size-5 min-w-5 rounded-full" />
                    <Skeleton
                      className="ml-2 h-5 w-full"
                      style={{
                        width: `${Math.floor(Math.random() * (100 - 40 + 1)) + 40}%`
                      }}
                    />
                  </div>
                ))}
        </div>
      </ScrollArea>
      <div className="flex min-h-20 items-center px-4 md:min-h-24 md:px-6">
        <OtherMenu />
      </div>
      <div className="flex min-h-20 items-center border-t px-4 md:min-h-24 md:px-6">
        <SupportDeveloper />
      </div>
    </aside>
  )
}
