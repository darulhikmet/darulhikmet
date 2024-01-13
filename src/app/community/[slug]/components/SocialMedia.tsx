import { Card, CardHeader } from '@/components/ui/card'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

type SocialMediaLinks = {
  [key: string]: string
}

export default function CommunitySocialMedia({
  socialMedia
}: {
  socialMedia: SocialMediaLinks
}) {
  const socialMediaIcons = [
    { icon: <Twitter />, key: 'twitter' },
    { icon: <Instagram />, key: 'instagram' },
    { icon: <Youtube />, key: 'youtube' },
    { icon: <Facebook />, key: 'facebook' }
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-around">
          {socialMediaIcons.map(
            ({ icon, key }) =>
              socialMedia[key] && (
                <a key={key} href={socialMedia[key]} target="_blank">
                  {icon}
                </a>
              )
          )}
        </div>
      </CardHeader>
    </Card>
  )
}