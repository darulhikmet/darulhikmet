import { Card, CardContent, CardHeader } from '@/components/ui/card'
import getCommunities from '@/services/getCommunities'
import getCommunity from '@/services/getCommunity'
import Image from 'next/image'
import About from './components/About'
import SocialMedia from './components/SocialMedia'

type Post = {
  content: string
}

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const community = await getCommunity(slug)

  return {
    title: `${community.name.humanReadable} | Darulhikmet`
  }
}

export async function generateStaticParams() {
  const communities = await getCommunities()

  return communities.map(item => {
    return { slug: item.name.machineFriendly }
  })
}

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
          {community.posts.map((item: Post, i: number) => (
            <Card className="overflow-x-auto" key={i}>
              <CardHeader>{item.content}</CardHeader>
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
                alt={`${slug} topluluk resmi`}
                fill
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-medium">{community.name.humanReadable}</div>
          </CardContent>
        </Card>
        <About about={community.about} />
        <SocialMedia socialMedia={community.socialMedia} />
      </div>
    </div>
  )
}
