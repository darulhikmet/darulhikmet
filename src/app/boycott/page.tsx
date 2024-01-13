import BoycottList from '@/components/BoycottList'

export const metadata = {
  title: 'Boykot'
}

export default function Boycott() {
  return (
    <div className="p-6">
      <BoycottList />
    </div>
  )
}
