import Hero from '@/components/client/Hero/Hero'
import ProductList from '@/components/client/ProductList/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
    </main>
  )
}
