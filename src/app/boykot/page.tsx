'use client'

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
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Brand = {
  name: string
  description: string
  logo: string
  isNew: boolean
}

export default function Boykot() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState<Brand[]>([])
  const [filteredData, setFilteredData] = useState<Brand[]>()

  const fetchData = async () => {
    const brandsData: Brand[] = await getBrands()

    setData(brandsData.reverse())
    setFilteredData(brandsData)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)

    const filtered = term
      ? data.filter(item => item.name.toLowerCase().includes(term))
      : data

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
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredData
          ? filteredData.map((item, i) => (
              <Card className="relative" key={i}>
                {item.isNew && (
                  <Badge className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 animate-pulse">
                    Yeni
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="truncate">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-40 w-full overflow-hidden rounded bg-muted">
                    {item.logo && (
                      <Image
                        className="object-cover"
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
                <Card className="h-[284px] animate-pulse" key={i} />
              ))}
      </div>
    </div>
  )
}
