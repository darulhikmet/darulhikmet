'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import getBrands from '@/services/getBrands'

type Brand = {
  name: string
  description: string
  logo: string
  isAddedNew: boolean
}

export default function BoycottList() {
  const [searchTerm, setSearchTerm] = useState('')
  const [boycottList, setBoycottList] = useState<Brand[]>([])
  const [filteredData, setFilteredData] = useState<Brand[]>()

  const fetchData = async () => {
    const brandsData: Brand[] = JSON.parse(await getBrands())

    setBoycottList(brandsData.reverse())
    setFilteredData(brandsData)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)

    const filtered = term
      ? boycottList.filter(item => item.name.toLowerCase().includes(term))
      : boycottList

    setFilteredData(filtered)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Input
        type="text"
        placeholder="Marka ara"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredData
          ? filteredData.map((item, i) => (
              <Card className="relative" key={i}>
                {item.isAddedNew && (
                  <Badge className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 animate-pulse">
                    Yeni
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="truncate">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 overflow-hidden rounded bg-muted">
                    {item.logo && (
                      <Image
                        className="object-cover grayscale"
                        src={item.logo}
                        alt={item.name}
                        fill
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          : Array(25)
              .fill(0)
              .map((_, i) => (
                <Card className="animate-pulse" key={i}>
                  <CardHeader>
                    <CardTitle className="h-6 w-full max-w-48 rounded bg-muted" />
                    <CardDescription className="h-5 w-full max-w-24 rounded bg-muted" />
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-40 overflow-hidden rounded bg-muted"></div>
                  </CardContent>
                </Card>
              ))}
      </div>
    </div>
  )
}
