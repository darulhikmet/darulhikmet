export default function Home() {
  return (
    <div className="space-y-4 p-4 md:p-6">
      {Array(50)
        .fill(0)
        .map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            eveniet illo, nobis voluptatibus minima dolores porro harum
            consequatur ipsum quaerat dolore sequi eius perferendis labore hic
            repellat? Voluptas, quasi molestiae?
          </p>
        ))}
    </div>
  )
}
