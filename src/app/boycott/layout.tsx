import BoycottHeader from './components/BoycottHeader'

export default function BoycottLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <BoycottHeader />
      {children}
    </div>
  )
}
