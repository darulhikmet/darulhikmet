'use client'

import { decodeJwt } from 'jose'
import Cookies from 'js-cookie'
import { Loader2, LogOut, Settings, User } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useToast } from './ui/use-toast'

import { useUserStore } from '@/stores/useUserStore'

import { login } from '@/services/auth/login'
import { register } from '@/services/auth/register'
import { tokenVerify } from '@/services/auth/tokenVerify'

export default function AuthButtons() {
  const { user, setUser, resetUser } = useUserStore()

  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  async function handleUserFromCookie() {
    const tokenFromCookie = Cookies.get('token')

    if (!tokenFromCookie) return

    try {
      const verifiedToken = await tokenVerify(tokenFromCookie)
      if (verifiedToken) {
        const decodedToken: any = decodeJwt(tokenFromCookie)

        if (decodedToken) {
          setUser(decodedToken)
        }
      }
    } catch (error) {
      console.error('Error handling user from cookie:', error)
      throw error
    }
  }

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const loginAction = await login(formData)

    if (loginAction.result) {
      setLoading(false)
      setLoginOpen(false)
      handleUserFromCookie()

      toast({
        title: loginAction.message
      })
    } else {
      setLoading(false)

      toast({
        title: 'Giriş Yaparken Hata İle Karşılaşıldı',
        description: loginAction.message
      })
    }
  }

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const registerAction = await register(formData)

    if (registerAction.result) {
      setLoading(false)
      setRegisterOpen(false)

      toast({
        title: registerAction.message
      })
    } else {
      setLoading(false)

      toast({
        title: 'Kayıt Olurken Hata İle Karşılaşıldı',
        description: registerAction.message
      })
    }
  }

  useEffect(() => {
    handleUserFromCookie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return !user.username ? (
    <>
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
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
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input id="username" name="username" type="text" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <DialogFooter>
                <Button className="w-24" disabled={loading}>
                  {loading ? (
                    <Loader2 className="absolute animate-spin" />
                  ) : (
                    'Giriş Yap'
                  )}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
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
          <form onSubmit={handleRegister}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input id="username" name="username" type="text" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <DialogFooter>
                <Button className="w-24" disabled={loading}>
                  {loading ? (
                    <Loader2 className="absolute animate-spin" />
                  ) : (
                    'Kayıt Ol'
                  )}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user.avatar} alt={`@${user.username}`} />
          <AvatarFallback>{user.username.slice(0, 2)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" sideOffset={48}>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profil</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Ayarlar</span>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            Cookies.remove('token')
            resetUser()
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Çıkış Yap</span>
          <DropdownMenuShortcut>⇧⌘Ç</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
