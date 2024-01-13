import { Card, CardHeader } from '@/components/ui/card'

export default function CommunityAbout({ about }: { about: string }) {
  return (
    <Card>
      <CardHeader>
        <div className="font-medium">Hakkında</div>
        <p>{about}</p>
      </CardHeader>
    </Card>
  )
}
