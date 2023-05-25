import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <h1 className='text-red-400'>home test</h1>
    </div>
  )
}