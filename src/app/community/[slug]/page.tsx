import Image from 'next/image'

export default async function Community({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <div className="flex">
      <div>
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
      <div className="sticky -top-60 ml-auto hidden h-full min-w-72 max-w-72 space-y-8 xl:block">
        <div className="rounded border bg-background p-4">
          <div className="relative h-64 w-64 overflow-hidden rounded bg-muted">
            <Image
              className="object-cover"
              src={`/avatars/${slug}.jpg`}
              alt={slug}
              fill
            />
          </div>
          <div className="mt-4">
            <div className="font-medium">{slug}</div>
          </div>
        </div>
        <div className="rounded border bg-background p-4">
          <div className="font-medium">{slug}</div>
        </div>
        <div className="rounded border bg-background p-4">
          <div className="font-medium">{slug}</div>
        </div>
        <div className="rounded border bg-background p-4">
          <div className="font-medium">{slug}</div>
        </div>
        <div className="rounded border bg-background p-4">
          <div className="font-medium">{slug}</div>
        </div>
      </div>
    </div>
  )
}
