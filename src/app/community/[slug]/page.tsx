import Image from 'next/image'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import About from './components/About'
import SocialMedia from './components/SocialMedia'

import getAllCommunities from '@/services/communities/getAllCommunities'
import getCommunityDetails from '@/services/communities/getCommunityDetails'

type Post = {
  content: string
}

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  try {
    const communityDetails = await getCommunityDetails(slug)
    const communityName = communityDetails.name.humanReadable

    const title = `${communityName} | Darulhikmet`

    return { title }
  } catch (error) {
    console.error('Error fetching community details:', error)
  }
}

export async function generateStaticParams() {
  try {
    const communities = await getAllCommunities()

    const communitySlugs = communities.map(item => {
      return { slug: item.name.machineFriendly }
    })

    return communitySlugs
  } catch (error) {
    console.error('Error fetching community slugs:', error)
  }

  return []
}

export default async function Community({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const communityDetails = await getCommunityDetails(slug)

  return (
    <div className="flex">
      <div className="flex w-full p-6 xl:border-r">
        <div className="mx-auto max-w-screen-lg space-y-4">
          {communityDetails.posts.map((item: Post, i: number) => (
            <Card key={i}>
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
                src={communityDetails.avatar}
                alt={`${slug} topluluk resmi`}
                fill
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="font-medium">
              {communityDetails.name.humanReadable}
            </div>
          </CardContent>
        </Card>
        <About about={communityDetails.about} />
        <SocialMedia socialMedia={communityDetails.socialMedia} />
      </div>
    </div>
  )
}
