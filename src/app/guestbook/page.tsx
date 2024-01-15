'use client'

import { FormEvent, useEffect, useState } from 'react'

import { Card, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'

import addGuestbookEntry from '@/services/addGuestbookEntry'
import getGuestbook from '@/services/getGuestbook'

type Guestbook = {
  message: string
}

export default function Guestbook() {
  const [newEntryMessage, setNewEntryMessage] = useState('')
  const [guestbookList, setGuestbookList] = useState<Guestbook[]>()

  const fetchData = async () => {
    try {
      const guestbook = await getGuestbook()
      const guestbookList = JSON.parse(guestbook).reverse()

      setGuestbookList(guestbookList)
    } catch (error) {
      console.error('Error fetching guestbook:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const message = (e.target as any).message.value
      if (message) {
        await addGuestbookEntry(message)
        await fetchData()

        setNewEntryMessage('')
      }
    } catch (error) {
      console.error('Error submitting the form:', error)
    }
  }
  return (
    <div className="p-6">
      <form onSubmit={e => handleSubmit(e)}>
        <Input
          name="message"
          type="text"
          placeholder="Mesaj yaz"
          value={newEntryMessage}
          onChange={e => setNewEntryMessage(e.target.value)}
        />
      </form>
      <div className="mt-6 space-y-6">
        {guestbookList
          ? guestbookList.map((item, i) => (
              <Card key={i}>
                <CardHeader>{item.message}</CardHeader>
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
    </div>
  )
}
