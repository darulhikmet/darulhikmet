import { Bug, Cookie, Info, MessageCircleReply, ScrollText } from 'lucide-react'

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
      <DropdownMenuContent align="end" side="right" sideOffset={32}>
        <DropdownMenuItem>
          <Info size={16} />
          <div className="ml-2">Hakkımda</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageCircleReply size={16} />
          <div className="ml-2">Geri Bildirim Gönder</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bug size={16} />
          <div className="ml-2">Sorun Bildir</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ScrollText size={16} />
          <div className="ml-2">Gizlilik Sözleşmesi</div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Cookie size={16} />
          <div className="ml-2">Çerez Politikası</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
