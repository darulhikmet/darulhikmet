'use client'

import moment from 'moment'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

import addEntry from '@/services/guestbook/addEntry'
import getEntries from '@/services/guestbook/getEntries'

import 'moment/locale/tr'

type Guestbook = {
  message: string
  createdAt: Date
}

export default function Guestbook() {
  const [newEntryMessage, setNewEntryMessage] = useState('')
  const [guestbookList, setGuestbookList] = useState<Guestbook[]>()

  const fetchData = async () => {
    try {
      const entries = await getEntries()
      const guestbookList = JSON.parse(entries).reverse()

      setGuestbookList(guestbookList)

      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Error fetching guestbook:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const target = e.currentTarget

    try {
      const message = target.message.value

      if (message) {
        await addEntry(message)
        await fetchData()

        setNewEntryMessage('')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
    }
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-lg space-y-4 p-4 md:space-y-6 md:p-6">
        {guestbookList
          ? guestbookList.map((item, i) => (
              <Card className="relative overflow-hidden" key={i}>
                <CardHeader>{item.message}</CardHeader>

                <div className="absolute bottom-0 right-0 rounded-tl bg-secondary px-2 py-1 text-xs">
                  {moment(item.createdAt).startOf('m').fromNow()}
                </div>
              </Card>
            ))
          : Array(20)
              .fill(0)
              .map((_, i) => (
                <Card className="animate-pulse" key={i}>
                  <CardHeader>
                    <Skeleton className="h-6" />
                  </CardHeader>
                </Card>
              ))}
      </div>
      <div className="sticky bottom-0 flex min-h-20 items-center border-t bg-background md:min-h-24">
        <form
          className="mx-auto flex w-full max-w-screen-lg gap-6 px-6"
          onSubmit={e => handleSubmit(e)}
        >
          <Input
            name="message"
            placeholder="Mesaj yaz"
            autoComplete="off"
            value={newEntryMessage}
            onChange={e => setNewEntryMessage(e.target.value)}
          />
          <Button>Gönder</Button>
        </form>
      </div>
    </div>
  )
}
