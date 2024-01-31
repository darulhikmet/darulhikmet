export default function MDXWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="prose prose-invert mx-auto max-w-screen-md p-4 md:p-6">
      {children}
    </div>
  )
}
