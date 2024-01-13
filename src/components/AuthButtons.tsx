'use client'

import { useToast } from '@/components/ui/use-toast'
import { Button } from './ui/button'

export default function AuthButtons() {
  const { toast } = useToast()

  return (
    <>
      <Button
        onClick={() => {
          toast({ title: 'Çok Yakında' })
        }}
      >
        Giriş Yap
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          toast({ title: 'Çok Yakında' })
        }}
      >
        Kayıt Ol
      </Button>
    </>
  )
}
