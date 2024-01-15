'use client'

import { useToast } from '@/components/ui/use-toast'
import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'

export default function AuthButtons() {
  const { toast } = useToast()

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Giriş Yap</Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={e => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Giriş Yap</DialogTitle>
            <DialogDescription>
              Eksiksiz bir deneyim için giriş yap.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <Input id="username" name="username" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  toast({ title: 'Çok Yakında' })
                }}
              >
                Giriş Yap
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Kayıt Ol</Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-md"
          onInteractOutside={e => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Kayıt Ol</DialogTitle>
            <DialogDescription>
              Eksiksiz bir deneyim için kayıt ol.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Kullanıcı Adı</Label>
              <Input id="username" name="username" type="text" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-posta Adresi</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Şifre</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  toast({ title: 'Çok Yakında' })
                }}
              >
                Kayıt Ol
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
