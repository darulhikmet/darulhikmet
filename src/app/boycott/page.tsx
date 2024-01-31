import type { Metadata } from 'next'

import BoycottList from './components/BoycottList'

export const metadata: Metadata = {
  title: 'Boykot | Darulhikmet'
}

export default function Boycott() {
  return <BoycottList />
}
