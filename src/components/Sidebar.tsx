import getCommunities from '@/app/services/getCommunities'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sparkle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SupportDeveloper from './SupportDeveloper'

const { version } = require('../../package.json')

export default async function Sidebar() {
  const data = await getCommunities()

  return (
    <nav className="fixed left-0 flex h-screen w-72 -translate-x-full flex-col border-r transition-all md:translate-x-0">
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
      <ScrollArea>
        <div className="flex flex-col px-4 py-8 text-sm font-medium text-muted-foreground">
          {data.map((item, i) => (
            <Link
              className="flex items-center rounded px-4 py-2 hover:bg-muted hover:text-foreground"
              href={`/community/${item.slug}`}
              key={i}
            >
              <span className="relative h-5 w-5 overflow-hidden rounded-full bg-muted">
                <Image
                  className="object-cover"
                  src={item.avatar}
                  alt={item.name}
                  fill
                />
              </span>
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto flex min-h-24 items-center justify-center border-t">
        <SupportDeveloper />
      </div>
    </nav>
  )
}
