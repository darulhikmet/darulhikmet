import { Card, CardContent, CardHeader } from '@/components/ui/card'
import getCommunity from '@/services/getCommunity'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

export default async function Community({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const data = await getCommunity(slug)

  return (
    <div className="flex gap-6">
      <div className="xl:border-r">
        {Array(50)
          .fill(0)
          .map((_, i) => (
            <p className="mb-4 last:mb-0" key={i}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              eveniet illo, nobis voluptatibus minima dolores porro harum
              consequatur ipsum quaerat dolore sequi eius perferendis labore hic
              repellat? Voluptas, quasi molestiae?
            </p>
          ))}
      </div>
      <div className="sticky -top-56 ml-auto hidden h-full min-w-72 max-w-72 space-y-6 xl:block">
        <Card>
          <CardHeader>
            <div className="relative h-60 overflow-hidden rounded bg-muted">
              <Image
                className="object-cover"
                src={data.avatar}
                alt={slug}
                fill
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-medium">{data.name}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="font-medium">Hakkında</div>
            <p>{data.about}</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Youtube />
              </a>
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Linkedin />
              </a>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
