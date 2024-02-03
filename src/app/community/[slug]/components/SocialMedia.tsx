import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

import { Card, CardHeader } from '@/components/ui/card'

import { Community } from '@/lib/types'

export default function CommunitySocialMedia({
  socialMedia
}: {
  socialMedia: Community['socialMedia']
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
              socialMedia[key as keyof typeof socialMedia] && (
                <a
                  key={key}
                  href={socialMedia[key as keyof typeof socialMedia]}
                  target="_blank"
                  aria-label={`${key} simgesi`}
                >
                  {icon}
                </a>
              )
          )}
        </div>
      </CardHeader>
    </Card>
  )
}
