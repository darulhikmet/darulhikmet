import { Bug, Cookie, Info, MessageCircleReply, ScrollText } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function OtherMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full" variant="outline">
          Daha Fazla
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={16}>
        <div className="*:cursor-pointer">
          <DropdownMenuItem asChild>
            <Link href="/about">
              <Info size={16} />
              <div className="ml-2">Hakkımda</div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageCircleReply size={16} />
            <div className="ml-2">Geri Bildirim Gönder</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bug size={16} />
            <div className="ml-2">Sorun Bildir</div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/privacy-policy">
              <ScrollText size={16} />
              <div className="ml-2">Gizlilik Sözleşmesi</div>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/cookie-policy">
              <Cookie size={16} />
              <div className="ml-2">Çerez Politikası</div>
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
