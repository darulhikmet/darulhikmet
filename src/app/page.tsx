export default function Home() {
  return (
    <div className="">
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
  )
}
