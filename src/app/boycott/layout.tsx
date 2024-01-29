import BoycottHeader from './components/boycottHeader'

export default function BoycottLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-6">
      <BoycottHeader />
      {children}
    </div>
  )
}
