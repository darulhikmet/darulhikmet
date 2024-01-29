'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

const menuItems = [
  { href: '/boycott', label: 'Boykot Listesi' },
  {
    href: '/boycott/why-should-we-boycott',
    label: 'Neden Boykot Etmeliyiz?'
  },
  {
    href: '/boycott/why-are-we-boycotting',
    label: `Neden Boykot Ediyoruz?`
  }
]

export default function BoycottHeader() {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap gap-4 rounded-lg border p-4">
      {menuItems.map((item, index) => (
        <Button
          variant={pathname == item.href ? 'default' : 'secondary'}
          key={index}
          asChild
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </div>
  )
}
