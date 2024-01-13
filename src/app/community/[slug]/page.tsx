import { Card, CardContent, CardHeader } from '@/components/ui/card'
import getCommunity from '@/services/getCommunity'
import Image from 'next/image'
import About from './components/About'
import SocialMedia from './components/SocialMedia'

export default async function Community({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const community = await getCommunity(slug)

  return (
    <div className="flex">
      <div className="flex w-full p-6 xl:border-r">
        <div className="mx-auto max-w-screen-lg space-y-4">
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <Card className="overflow-x-auto" key={i}>
                <CardHeader>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit sed maiores architecto fugit beatae quasi
                  similique pariatur quibusdam aperiam cumque laborum officiis
                  eveniet dignissimos, hic porro, necessitatibus voluptatem
                  possimus deleniti.
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>
      <div className="sticky -top-60 ml-auto hidden h-full w-full max-w-80 space-y-6 p-6 xl:block">
        <Card>
          <CardHeader>
            <div className="relative h-60 overflow-hidden rounded bg-muted">
              <Image
                className="object-cover"
                src={community.avatar}
                alt={`${slug} Topluluk Resmi`}
                fill
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-medium">{community.name}</div>
          </CardContent>
        </Card>
        <About about={community.about} />
        <SocialMedia socialMedia={community.socialMedia} />
      </div>
    </div>
  )
}
