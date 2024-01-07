'use client'

import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Copy, Mail, TwitterIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import { Label } from './ui/label'
import { Separator } from './ui/separator'

export default function SupportDeveloper() {
  const { toast } = useToast()

  const IBAN = 'TR10 0001 0024 9095 9504 4850 01'
  const ALICI_ADI = 'MUHAMMET EMİN AKALAN'

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Proje Geliştiricisine Destek Ol</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Proje Geliştiricisine Destek Ol</DialogTitle>
          <DialogDescription>
            Bu projenin ilerlemesine katkıda bulunmak için aşağıdaki IBAN
            bilgisine istediğiniz miktarda bağış yapabilirsiniz.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <Label htmlFor="iban">IBAN</Label>
        <div className="flex space-x-4">
          <Input id="iban" defaultValue={IBAN} readOnly />
          <Button
            type="submit"
            onClick={() => {
              navigator.clipboard.writeText(IBAN.replaceAll(' ', ''))
              toast({ title: 'IBAN Kopyalandı' })
            }}
          >
            <Copy className="mr-2 h-4 w-4" />
            Kopyala
          </Button>
        </div>
        <Label htmlFor="receiver">Alıcı Adı</Label>
        <div className="flex space-x-4">
          <Input id="receiver" defaultValue={ALICI_ADI} readOnly />
          <Button
            type="submit"
            onClick={() => {
              navigator.clipboard.writeText(ALICI_ADI)
              toast({ title: 'Alıcı Adı Kopyalandı' })
            }}
          >
            <Copy className="mr-2 h-4 w-4" />
            Kopyala
          </Button>
        </div>

        <Separator />
        <DialogFooter>
          <div>
            <p className="text-sm text-muted-foreground">
              Benimle iletişime geçmek isterseniz, aşağıdaki kanalları
              kullanarak bana ulaşabilirsiniz.
            </p>
            <div className="mt-4 flex space-x-4">
              <Button
                className="w-full"
                onClick={() => {
                  window.location.href = 'https://twitter.com/05akalan57'
                }}
              >
                <TwitterIcon className="mr-2 h-4 w-4" />
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  window.location.href = 'mailto:05akalan57@gmail.com'
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
